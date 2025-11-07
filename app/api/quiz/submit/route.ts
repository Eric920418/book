import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { dimensions } from '@/lib/maia2-questions'

// MAIA-2 結果驗證 schema
const submitMaia2Schema = z.object({
  email: z.string().email(),
  resultData: z.record(z.string(), z.number()), // 8個面向的分數
  completedAt: z.string(),
})

// 郵件發送設定（僅在配置時啟用）
const isEmailConfigured = !!(
  process.env.EMAIL_SERVER_HOST &&
  process.env.EMAIL_SERVER_USER &&
  process.env.EMAIL_SERVER_PASSWORD
)

const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })
  : null

// 生成 MAIA-2 結果的 HTML 郵件
function generateMaia2EmailHtml(
  dimensionScores: Record<string, number>,
  siteUrl: string
): string {
  const dimensionRows = dimensions
    .map(
      (dim) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <strong>${dim.name}</strong><br>
        <span style="color: #6b7280; font-size: 14px;">${dim.description}</span>
      </td>
      <td style="padding: 12px; text-align: center; border-bottom: 1px solid #e5e7eb;">
        <span style="font-size: 20px; font-weight: bold; color: #9333ea;">
          ${dimensionScores[dim.key]?.toFixed(2) || '0.00'}
        </span>
      </td>
    </tr>
  `
    )
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h1 style="color: #111827; text-align: center; margin-bottom: 10px;">
            你的 MAIA-2 覺察輪廓
          </h1>
          <p style="text-align: center; color: #6b7280; font-size: 16px; margin-bottom: 30px;">
            《你不是破碎，而是入口》
          </p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #111827; font-size: 18px; margin-bottom: 15px;">
              💡 你的 8 個覺察面向
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${dimensionRows}
            </table>
            <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 15px;">
              * 分數範圍：0（從不）～ 5（總是）
            </p>
          </div>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
            <h3 style="color: #1e40af; margin-top: 0;">如何解讀你的結果</h3>
            <p style="color: #1e3a8a; margin-bottom: 10px;">
              <strong>凹的地方</strong>（分數較低）→ 相對薄弱的能力，可從此處開始練習
            </p>
            <p style="color: #1e3a8a; margin-bottom: 10px;">
              <strong>凸的地方</strong>（分數較高）→ 已有的內在資源
            </p>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 0;">
              建議隔 4-8 週再測一次，觀察前後變化。重點不在一次的高低，而在變化。
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="${siteUrl}/quiz/result"
               style="display: inline-block; background-color: #111827; color: white;
                      padding: 14px 28px; text-decoration: none; border-radius: 8px;
                      font-weight: 600; font-size: 16px;">
              查看完整雷達圖
            </a>
          </div>

          <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="text-align: center; color: #6b7280; font-size: 14px; margin-bottom: 15px;">
              建議每日搭配 13 分鐘身心學導引練習
            </p>
            <div style="text-align: center;">
              <a href="${siteUrl}/guide"
                 style="color: #9333ea; text-decoration: none; font-weight: 500;">
                🎧 開始導引
              </a>
              <span style="margin: 0 10px; color: #d1d5db;">|</span>
              <a href="https://www.books.com.tw"
                 style="color: #9333ea; text-decoration: none; font-weight: 500;">
                📚 購買書籍
              </a>
            </div>
          </div>
        </div>

        <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
          本郵件由《你不是破碎，而是入口》書籍網站自動發送<br>
          我們尊重您的隱私，不會將您的資料用於其他用途
        </p>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // 解析請求資料
    const body = await request.json()

    // 驗證資料
    const validatedData = submitMaia2Schema.parse(body)

    // 儲存測驗結果到資料庫
    const result = await prisma.mAIA2Result.create({
      data: {
        email: validatedData.email,
        dimensionScores: validatedData.resultData,
        completedAt: new Date(validatedData.completedAt),
        metadata: {
          userAgent: request.headers.get('user-agent') || 'unknown',
          submittedAt: new Date().toISOString(),
        },
      },
    })

    // 發送郵件（如果已配置）
    if (transporter && isEmailConfigured) {
      try {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        const emailHtml = generateMaia2EmailHtml(
          validatedData.resultData,
          siteUrl
        )

        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
          to: validatedData.email,
          subject: '你的 MAIA-2 覺察輪廓 - 《你不是破碎，而是入口》',
          html: emailHtml,
        })

        console.log(`✅ 郵件已發送至: ${validatedData.email}`)
      } catch (emailError) {
        console.error('❌ 郵件發送失敗:', emailError)
        // 郵件發送失敗不影響測驗結果的儲存
      }
    } else {
      console.log('ℹ️ 郵件功能未配置，跳過發送')
    }

    return NextResponse.json({
      success: true,
      data: {
        id: result.id,
        message: '測驗結果已儲存',
        emailSent: isEmailConfigured,
      },
    })
  } catch (error) {
    console.error('❌ 提交測驗結果時發生錯誤:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: '資料格式錯誤',
          details: error.issues
        },
        { status: 400 }
      )
    }

    // 顯示完整錯誤在前端（依據用戶要求）
    return NextResponse.json(
      {
        success: false,
        error: '伺服器錯誤',
        message: error instanceof Error ? error.message : '未知錯誤',
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    )
  }
}
