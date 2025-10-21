import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getTokenFromRequest, verifyToken } from '@/lib/auth/verify'

// 根據分數判斷智慧類型
function getWisdomType(score: number): string {
  if (score <= 6) return '感性智者'
  else if (score <= 9) return '人際大師'
  else if (score <= 12) return '理性思想家'
  else return '行動領袖'
}

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
    
    const admin = verifyToken(token)
    if (!admin) {
      return NextResponse.json(
        { success: false, error: '無效的授權' },
        { status: 401 }
      )
    }
    
    // 獲取總測驗次數
    const totalResults = await prisma.quizResult.count()
    
    // 獲取今日測驗次數
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayResults = await prisma.quizResult.count({
      where: {
        createdAt: {
          gte: today
        }
      }
    })
    
    // 計算平均分數
    const aggregation = await prisma.quizResult.aggregate({
      _avg: {
        totalScore: true
      }
    })
    const averageScore = aggregation._avg.totalScore || 0
    
    // 獲取所有測驗結果的分數，用於計算智慧類型分布
    const allResults = await prisma.quizResult.findMany({
      select: {
        totalScore: true
      }
    })
    
    // 計算智慧類型分布
    const wisdomTypeCount: { [key: string]: number } = {}
    allResults.forEach(result => {
      const type = getWisdomType(result.totalScore)
      wisdomTypeCount[type] = (wisdomTypeCount[type] || 0) + 1
    })
    
    const wisdomTypeDistribution = Object.entries(wisdomTypeCount).map(([type, count]) => ({
      type,
      count
    }))
    
    // 獲取過去 7 天的每日測驗數據
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
    sevenDaysAgo.setHours(0, 0, 0, 0)
    
    const dailyResultsRaw = await prisma.$queryRaw<{ date: Date; count: bigint }[]>`
      SELECT DATE(created_at) as date, COUNT(*) as count
      FROM "QuizResult"
      WHERE created_at >= ${sevenDaysAgo}
      GROUP BY DATE(created_at)
      ORDER BY DATE(created_at)
    `
    
    // 填充缺失的日期
    const dailyResults = []
    const currentDate = new Date(sevenDaysAgo)
    
    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.toISOString().split('T')[0]
      const found = dailyResultsRaw.find(
        r => r.date.toISOString().split('T')[0] === dateStr
      )
      
      dailyResults.push({
        date: `${currentDate.getMonth() + 1}/${currentDate.getDate()}`,
        count: found ? Number(found.count) : 0
      })
      
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return NextResponse.json({
      success: true,
      data: {
        totalResults,
        todayResults,
        averageScore,
        wisdomTypeDistribution,
        dailyResults
      }
    })
    
  } catch (error) {
    console.error('獲取統計資料錯誤:', error)
    return NextResponse.json(
      { success: false, error: '伺服器錯誤' },
      { status: 500 }
    )
  }
}
