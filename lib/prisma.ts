import { PrismaClient } from '@prisma/client'

// 宣告全域變數類型
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// 建立 Prisma Client 實例
export const prisma = globalThis.prisma || new PrismaClient()

// 在開發環境中，將 prisma 實例存在全域變數中，避免熱重載時創建多個實例
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
