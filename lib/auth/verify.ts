import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface JWTPayload {
  id: string
  email: string
  name: string
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as JWTPayload
    return decoded
  } catch {
    return null
  }
}

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
