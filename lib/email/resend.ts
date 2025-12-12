/**
 * Edge Runtime 相容的郵件發送工具
 * 使用 Resend API 替代 nodemailer
 */
import { Resend } from 'resend'

// 初始化 Resend client
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY 未設定，郵件功能已停用')
    return null
  }
  return new Resend(apiKey)
}

export interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
  replyTo?: string
}

export interface SendEmailResult {
  success: boolean
  id?: string
  error?: string
}

/**
 * 發送郵件
 */
export async function sendEmail(options: SendEmailOptions): Promise<SendEmailResult> {
  const resend = getResendClient()

  if (!resend) {
    return {
      success: false,
      error: 'RESEND_API_KEY 未設定',
    }
  }

  try {
    const fromEmail = options.from || process.env.EMAIL_FROM || 'onboarding@resend.dev'

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    })

    if (error) {
      console.error('Resend 發送郵件失敗:', error)
      return {
        success: false,
        error: error.message,
      }
    }

    return {
      success: true,
      id: data?.id,
    }
  } catch (error) {
    console.error('發送郵件時發生錯誤:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : '未知錯誤',
    }
  }
}

/**
 * 檢查郵件功能是否已配置
 */
export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY
}
