/**
 * Token 驗證工具（Edge Runtime 相容）
 */
import { NextRequest } from 'next/server'
import { verifyToken as verifyJWT, type JWTPayload } from './jwt'

export type { JWTPayload }

/**
 * 驗證 Token（非同步版本）
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  return verifyJWT(token)
}

/**
 * 從請求中獲取 Token
 */
export function getTokenFromRequest(request: NextRequest): string | null {
  // 從 Authorization header 獲取 token
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }

  // 從 cookie 獲取 token
  const cookieToken = request.cookies.get('adminToken')?.value
  if (cookieToken) {
    return cookieToken
  }

  return null
}

/**
 * 驗證請求中的 Token 並返回 payload
 */
export async function verifyRequest(request: NextRequest): Promise<JWTPayload | null> {
  const token = getTokenFromRequest(request)
  if (!token) {
    return null
  }
  return verifyToken(token)
}
