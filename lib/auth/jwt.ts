/**
 * Edge Runtime 相容的 JWT 工具
 * 使用 jose 套件替代 jsonwebtoken
 */
import { SignJWT, jwtVerify, type JWTPayload as JoseJWTPayload } from 'jose'

export interface JWTPayload {
  id: string
  email: string
  name: string
}

// 獲取 JWT 密鑰（轉換為 Uint8Array）
function getJWTSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET || 'secret'
  return new TextEncoder().encode(secret)
}

/**
 * 生成 JWT Token
 */
export async function signToken(payload: JWTPayload, expiresIn: string = '7d'): Promise<string> {
  const secret = getJWTSecret()

  // 解析過期時間
  const expiration = parseExpiration(expiresIn)

  const token = await new SignJWT(payload as unknown as JoseJWTPayload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiration)
    .sign(secret)

  return token
}

/**
 * 驗證並解析 JWT Token
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const secret = getJWTSecret()
    const { payload } = await jwtVerify(token, secret)

    return {
      id: payload.id as string,
      email: payload.email as string,
      name: payload.name as string,
    }
  } catch (error) {
    console.error('JWT 驗證失敗:', error)
    return null
  }
}

/**
 * 解析過期時間字串
 * 支援格式：'7d', '24h', '30m', '60s'
 */
function parseExpiration(expiresIn: string): Date {
  const match = expiresIn.match(/^(\d+)([dhms])$/)
  if (!match) {
    // 預設 7 天
    return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  }

  const value = parseInt(match[1], 10)
  const unit = match[2]

  const now = Date.now()
  let ms: number

  switch (unit) {
    case 'd':
      ms = value * 24 * 60 * 60 * 1000
      break
    case 'h':
      ms = value * 60 * 60 * 1000
      break
    case 'm':
      ms = value * 60 * 1000
      break
    case 's':
      ms = value * 1000
      break
    default:
      ms = 7 * 24 * 60 * 60 * 1000
  }

  return new Date(now + ms)
}
