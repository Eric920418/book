import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// 驗證請求資料的 schema
const submitQuizSchema = z.object({
  quizId: z.string(),
  email: z.string().email(),
  answers: z.array(z.object({
    optionId: z.string()
  })),
  totalScore: z.number()
})

// 郵件發送設定
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

// 根據分數判斷智慧類型（與結果頁面相同的邏輯）
function getWisdomType(score: number) {
  if (score <= 6) {
    return {
      type: '感性智者',
      description: '您是一個重視情感和直覺的人，善於理解他人的情緒，具有豐富的同理心。',
      advice: '繼續培養您的情感智慧，同時也要學習理性思考，達到感性與理性的平衡。'
    }
  } else if (score <= 9) {
    return {
      type: '人際大師',
      description: '您善於處理人際關係，懂得在不同情境中做出適當的回應，是天生的協調者。',
      advice: '您的人際智慧是寶貴的資產，建議多將這項能力運用在團隊合作和領導力發展上。'
    }
  } else if (score <= 12) {
    return {
      type: '理性思想家',
      description: '您擁有清晰的邏輯思維和分析能力，善於解決問題並做出理性的決策。',
      advice: '保持您的理性優勢，同時也要記得關注情感層面，讓決策更加全面。'
    }
  } else {
    return {
      type: '行動領袖',
      description: '您是一個果斷的行動派，有強烈的目標導向和執行力，善於將想法轉化為現實。',
      advice: '您的執行力令人欽佩，建議在行動前多做規劃，並聆聽他人的意見。'
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // 解析請求資料
    const body = await request.json()
    
    // 驗證資料
    const validatedData = submitQuizSchema.parse(body)
    
    // 儲存測驗結果到資料庫
    const result = await prisma.quizResult.create({
      data: {
        email: validatedData.email,
        totalScore: validatedData.totalScore,
        quizId: validatedData.quizId,
        resultData: {
          submittedAt: new Date().toISOString(),
          userAgent: request.headers.get('user-agent') || 'unknown'
        },
        answers: {
          create: validatedData.answers.map(answer => ({
            optionId: answer.optionId
          }))
        }
      },
      include: {
        quiz: true,
        answers: {
          include: {
            option: {
              include: {
                question: true
              }
            }
          }
        }
      }
    })

    // 取得智慧類型
    const wisdomType = getWisdomType(result.totalScore)

    // 準備郵件內容
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb; text-align: center;">您的測驗結果</h1>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #111827; margin-bottom: 10px;">您的智慧類型：${wisdomType.type}</h2>
          <p style="color: #6b7280; font-size: 16px;">${wisdomType.description}</p>
        </div>

        <div style="background-color: #e5e7eb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827;">建議：</h3>
          <p style="color: #6b7280;">${wisdomType.advice}</p>
        </div>

        <h3 style="color: #111827; margin-top: 30px;">答題詳情：</h3>
        ${result.answers.map((answer, index) => `
          <div style="border: 1px solid #e5e7eb; padding: 15px; margin: 10px 0; border-radius: 8px;">
            <strong>問題 ${index + 1}：</strong>${answer.option.question.text}<br>
            <span style="color: #6b7280;">您的答案：${answer.option.text}（${answer.option.score} 分）</span>
          </div>
        `).join('')}

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6b7280;">總分：${result.totalScore} 分</p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/quiz/result/${result.id}" 
             style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 8px; margin-top: 20px;">
            查看完整結果
          </a>
        </div>

        <hr style="margin: 40px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="text-align: center; color: #6b7280; font-size: 14px;">
          感謝您完成測驗！<br>
          如果您想要更深入了解自己，歡迎閱讀《人生的智慧之書》
        </p>
      </div>
    `

    // 發送郵件
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: validatedData.email,
        subject: `您的測驗結果 - ${wisdomType.type}`,
        html: emailHtml,
      })
    } catch (emailError) {
      console.error('郵件發送失敗:', emailError)
      // 郵件發送失敗不影響測驗結果的儲存
    }

    return NextResponse.json({
      success: true,
      data: {
        id: result.id,
        wisdomType: wisdomType.type
      }
    })

  } catch (error) {
    console.error('提交測驗結果時發生錯誤:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: '資料格式錯誤', details: error.issues },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, error: '伺服器錯誤' },
      { status: 500 }
    )
  }
}
