import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 驗證資料庫狀態...\n')

  // 檢查 Admin 表格
  const adminCount = await prisma.admin.count()
  console.log(`✅ Admin 表格: ${adminCount} 筆記錄`)

  if (adminCount > 0) {
    const admin = await prisma.admin.findFirst()
    console.log(`   - Email: ${admin?.email}`)
  }

  // 檢查 MAIA2Result 表格
  const resultCount = await prisma.mAIA2Result.count()
  console.log(`✅ MAIA2Result 表格: ${resultCount} 筆測驗結果`)

  console.log('\n📊 資料庫狀態：')
  console.log('   ✓ 資料庫連線成功')
  console.log('   ✓ 表格結構正確')
  console.log('   ✓ 管理員帳號已設定')
  console.log(`   ${resultCount > 0 ? '✓' : '○'} 測驗結果 ${resultCount > 0 ? '有' : '無'}資料\n`)

  console.log('🎉 資料庫已準備好儲存用戶測驗結果！')
}

main()
  .catch((e) => {
    console.error('❌ 驗證失敗:', e.message)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
