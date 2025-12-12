import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getTokenFromRequest, verifyToken } from '@/lib/auth/verify'


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

    // 從查詢參數獲取分頁和篩選條件
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const email = searchParams.get('email')

    // 建立查詢條件
    const where = {
      ...(email && { email: { contains: email } }),
    }

    // 獲取總數
    const total = await prisma.mAIA2Result.count({ where })

    // 獲取測驗結果
    const results = await prisma.mAIA2Result.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit
    })

    return NextResponse.json({
      success: true,
      data: results,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('獲取測驗結果錯誤:', error)
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
