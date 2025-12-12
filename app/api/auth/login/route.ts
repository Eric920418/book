import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/auth/password'
import { signToken } from '@/lib/auth/jwt'
import { z } from 'zod'


// 驗證請求資料的 schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export async function POST(request: NextRequest) {
  try {
    // 解析請求資料
    const body = await request.json()

    // 驗證資料
    const validatedData = loginSchema.parse(body)

    // 查找管理員
    const admin = await prisma.admin.findUnique({
      where: { email: validatedData.email }
    })

    if (!admin) {
      return NextResponse.json(
        { success: false, error: '帳號或密碼錯誤' },
        { status: 401 }
      )
    }

    // 驗證密碼
    const isValidPassword = await verifyPassword(validatedData.password, admin.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: '帳號或密碼錯誤' },
        { status: 401 }
      )
    }

    // 生成 JWT token（使用 Edge 相容的 jose）
    const token = await signToken(
      {
        id: admin.id,
        email: admin.email,
        name: admin.name
      },
      '7d'
    )

    return NextResponse.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name
      }
    })

  } catch (error) {
    console.error('登入錯誤:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: '資料格式錯誤' },
        { status: 400 }
      )
    }

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
