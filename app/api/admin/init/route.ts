import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth/password'


export async function POST() {
  try {
    // 檢查是否已有管理員
    const existingAdmin = await prisma.admin.findFirst()

    if (existingAdmin) {
      return NextResponse.json(
        { success: false, error: '管理員已存在' },
        { status: 400 }
      )
    }

    // 創建預設管理員（使用 Web Crypto API 加密）
    const hashedPassword = await hashPassword('admin123')

    const admin = await prisma.admin.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
        name: '系統管理員'
      }
    })

    return NextResponse.json({
      success: true,
      message: '管理員帳號創建成功',
      admin: {
        email: admin.email,
        name: admin.name
      }
    })

  } catch (error) {
    console.error('創建管理員錯誤:', error)
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
