import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getTokenFromRequest, verifyToken } from '@/lib/auth/verify'
import { dimensions } from '@/lib/maia2-questions'


export async function GET(request: NextRequest) {
  try {
    // 驗證管理員身份
    const token = getTokenFromRequest(request)
    if (!token) {
      return NextResponse.json(
        { success: false, error: '未授權' },
        { status: 401 }
      )
    }

    // 注意：verifyToken 現在是非同步的
    const admin = await verifyToken(token)
    if (!admin) {
      return NextResponse.json(
        { success: false, error: '無效的授權' },
        { status: 401 }
      )
    }

    // 獲取總測驗次數
    const totalResults = await prisma.mAIA2Result.count()

    // 獲取今日測驗次數
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayResults = await prisma.mAIA2Result.count({
      where: {
        createdAt: {
          gte: today
        }
      }
    })

    // 獲取所有測驗結果，計算各面向的平均分數
    const allResults = await prisma.mAIA2Result.findMany({
      select: {
        dimensionScores: true,
        createdAt: true
      }
    })

    // 計算每個面向的平均分數
    const dimensionAverages: Record<string, number> = {}
    dimensions.forEach(dim => {
      const scores = allResults
        .map(r => (r.dimensionScores as Record<string, number>)[dim.key])
        .filter(score => score !== undefined && score !== null)

      const avg = scores.length > 0
        ? scores.reduce((sum, score) => sum + score, 0) / scores.length
        : 0

      dimensionAverages[dim.key] = Number(avg.toFixed(2))
    })

    // 計算整體平均分（8個面向的平均）
    const overallAverage = Object.values(dimensionAverages).reduce((sum, score) => sum + score, 0) / 8

    // 找出最高和最低的面向
    const sortedDimensions = Object.entries(dimensionAverages)
      .sort(([, a], [, b]) => b - a)
      .map(([key, score]) => ({
        dimension: dimensions.find(d => d.key === key)?.name || key,
        score
      }))

    // 計算過去 7 天的每日測驗數據（不使用 $queryRaw，改用 JavaScript 計算）
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
    sevenDaysAgo.setHours(0, 0, 0, 0)

    // 從已獲取的資料中篩選過去 7 天的結果
    const recentResults = allResults.filter(r => r.createdAt >= sevenDaysAgo)

    // 按日期分組計算
    const dailyCountMap: Record<string, number> = {}
    recentResults.forEach(r => {
      const dateStr = r.createdAt.toISOString().split('T')[0]
      dailyCountMap[dateStr] = (dailyCountMap[dateStr] || 0) + 1
    })

    // 填充缺失的日期
    const dailyResults = []
    const currentDate = new Date(sevenDaysAgo)

    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.toISOString().split('T')[0]
      dailyResults.push({
        date: `${currentDate.getMonth() + 1}/${currentDate.getDate()}`,
        count: dailyCountMap[dateStr] || 0
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return NextResponse.json({
      success: true,
      data: {
        totalResults,
        todayResults,
        averageScore: Number(overallAverage.toFixed(2)),
        dimensionAverages,
        topDimensions: sortedDimensions.slice(0, 3),
        bottomDimensions: sortedDimensions.slice(-3).reverse(),
        dailyResults
      }
    })

  } catch (error) {
    console.error('獲取統計資料錯誤:', error)
    return NextResponse.json(
      {
        success: false,
        error: '伺服器錯誤',
        message: error instanceof Error ? error.message : '未知錯誤'
      },
      { status: 500 }
    )
  }
}
