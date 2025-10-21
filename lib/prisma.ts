import { PrismaClient } from '@prisma/client'

// 宣告全域變數類型
declare global {
  var prisma: PrismaClient | undefined
}

// 建立 Prisma Client 實例
export const prisma = global.prisma || new PrismaClient()

// 在開發環境中，將 prisma 實例存在全域變數中，避免熱重載時創建多個實例
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
