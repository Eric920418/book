/**
 * Edge Runtime 相容的密碼加密工具
 * 使用 Web Crypto API（PBKDF2）替代 bcryptjs
 */

const ITERATIONS = 100000
const KEY_LENGTH = 32
const SALT_LENGTH = 16

// 將 ArrayBuffer 轉換為 Base64 字串
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

// 將 Base64 字串轉換為 ArrayBuffer
function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}

// 生成隨機 salt
function generateSalt(): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(SALT_LENGTH))
}

// 使用 PBKDF2 派生密鑰
async function deriveKey(password: string, salt: Uint8Array): Promise<ArrayBuffer> {
  const encoder = new TextEncoder()
  const passwordBuffer = encoder.encode(password)

  // 導入密碼作為密鑰材料
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveBits']
  )

  // 使用 PBKDF2 派生密鑰
  // 注意：需要使用 salt.buffer 來取得 ArrayBuffer
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt.buffer as ArrayBuffer,
      iterations: ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    KEY_LENGTH * 8
  )

  return derivedBits
}

/**
 * 密碼加密
 * 格式：$pbkdf2$iterations$salt$hash
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = generateSalt()
  const derivedKey = await deriveKey(password, salt)

  const saltBase64 = arrayBufferToBase64(salt.buffer as ArrayBuffer)
  const hashBase64 = arrayBufferToBase64(derivedKey)

  return `$pbkdf2$${ITERATIONS}$${saltBase64}$${hashBase64}`
}

/**
 * 驗證密碼
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    // 支援舊的 bcrypt 格式（以 $2a$、$2b$ 開頭）
    if (hashedPassword.startsWith('$2a$') || hashedPassword.startsWith('$2b$')) {
      // 如果是舊格式，使用 bcryptjs 驗證（僅限本地開發）
      // 生產環境應該先遷移所有密碼
      console.warn('警告：檢測到舊版 bcrypt 格式密碼，請遷移到新格式')

      // 動態導入 bcryptjs（僅用於遷移期間）
      try {
        const bcrypt = await import('bcryptjs')
        return await bcrypt.compare(password, hashedPassword)
      } catch {
        console.error('bcryptjs 不可用，無法驗證舊格式密碼')
        return false
      }
    }

    // 解析新的 PBKDF2 格式
    const parts = hashedPassword.split('$')
    if (parts.length !== 5 || parts[1] !== 'pbkdf2') {
      return false
    }

    const iterations = parseInt(parts[2], 10)
    const saltBase64 = parts[3]
    const storedHashBase64 = parts[4]

    if (iterations !== ITERATIONS) {
      // 可以在這裡處理不同迭代次數的情況
    }

    const salt = new Uint8Array(base64ToArrayBuffer(saltBase64))
    const derivedKey = await deriveKey(password, salt)
    const derivedHashBase64 = arrayBufferToBase64(derivedKey)

    // 使用常數時間比較防止時序攻擊
    return timingSafeEqual(storedHashBase64, derivedHashBase64)
  } catch (error) {
    console.error('密碼驗證錯誤:', error)
    return false
  }
}

/**
 * 常數時間字串比較（防止時序攻擊）
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }

  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }

  return result === 0
}
