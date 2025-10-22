import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../lib/auth/password'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 開始初始化 MAIA-2 資料庫...')

  // 創建預設管理員帳號
  const hashedPassword = await hashPassword('admin123')
  await prisma.admin.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: '系統管理員'
    }
  })

  console.log('✅ 管理員帳號已創建')
  console.log('')
  console.log('📝 預設管理員登入資訊：')
  console.log('   Email: admin@example.com')
  console.log('   密碼: admin123')
  console.log('')
  console.log('⚠️  請在正式環境中修改預設密碼！')
  console.log('')
  console.log('✨ 資料庫初始化完成！')
}

main()
  .catch((e) => {
    console.error('❌ 初始化失敗:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
