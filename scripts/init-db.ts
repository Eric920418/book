import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../lib/auth/password'

const prisma = new PrismaClient()

async function main() {
  console.log('開始初始化資料庫...')

  // 創建管理員
  const hashedPassword = await hashPassword('admin123')
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: '系統管理員'
    }
  })
  console.log('✓ 管理員帳號已創建')

  // 創建作者
  const author = await prisma.author.upsert({
    where: { id: 'default-author' },
    update: {},
    create: {
      id: 'default-author',
      name: '王大明',
      biography: '王大明是一位知名的哲學家和作家，擁有超過20年的寫作經驗。他的作品涵蓋哲學、心理學和人生智慧等領域，深受讀者喜愛。他相信透過閱讀和思考，每個人都能找到屬於自己的人生答案。',
      photo: '/author-photo.jpg',
      email: 'author@example.com',
      website: 'https://example.com'
    }
  })
  console.log('✓ 作者資料已創建')

  // 創建書籍
  const book = await prisma.book.upsert({
    where: { id: 'default-book' },
    update: {},
    create: {
      id: 'default-book',
      title: '人生的智慧之書',
      description: '這是一本關於人生智慧的書籍，透過深入淺出的方式，帶領讀者探索生命的意義與價值。本書集結了古今中外的智慧結晶，幫助您在人生的道路上找到方向。',
      coverImage: '/book-cover.jpg',
      audioUrl: '/audio/sample.mp3',
      publishDate: new Date('2024-03-01'),
      isbn: '978-123-456-789-0',
      authorId: author.id
    }
  })
  console.log('✓ 書籍資料已創建')

  // 創建測驗
  const quiz = await prisma.quiz.upsert({
    where: { id: 'default-quiz' },
    update: {},
    create: {
      id: 'default-quiz',
      title: '發現您的人生智慧類型',
      description: '透過這個測驗，了解您獨特的智慧特質和人生觀',
      isActive: true,
      questions: {
        create: [
          {
            text: '當面對困難時，您通常會：',
            order: 1,
            options: {
              create: [
                { text: '冷靜分析問題，尋找解決方案', score: 3, order: 1 },
                { text: '先處理情緒，再思考對策', score: 2, order: 2 },
                { text: '尋求他人的幫助和建議', score: 1, order: 3 },
                { text: '相信直覺，隨機應變', score: 4, order: 4 }
              ]
            }
          },
          {
            text: '您認為人生最重要的是：',
            order: 2,
            options: {
              create: [
                { text: '追求知識和真理', score: 3, order: 1 },
                { text: '建立深厚的人際關係', score: 2, order: 2 },
                { text: '實現個人目標和成就', score: 4, order: 3 },
                { text: '享受當下，活在當下', score: 1, order: 4 }
              ]
            }
          },
          {
            text: '在做決定時，您更傾向於：',
            order: 3,
            options: {
              create: [
                { text: '依據邏輯和數據', score: 3, order: 1 },
                { text: '考慮他人的感受', score: 2, order: 2 },
                { text: '追隨內心的聲音', score: 1, order: 3 },
                { text: '評估風險與回報', score: 4, order: 4 }
              ]
            }
          },
          {
            text: '您最喜歡的學習方式是：',
            order: 4,
            options: {
              create: [
                { text: '閱讀書籍和研究資料', score: 3, order: 1 },
                { text: '與他人討論和交流', score: 2, order: 2 },
                { text: '親身體驗和實踐', score: 4, order: 3 },
                { text: '觀察和反思', score: 1, order: 4 }
              ]
            }
          },
          {
            text: '在團隊中，您通常扮演的角色是：',
            order: 5,
            options: {
              create: [
                { text: '策略規劃者', score: 3, order: 1 },
                { text: '團隊協調者', score: 2, order: 2 },
                { text: '執行推動者', score: 4, order: 3 },
                { text: '創意提供者', score: 1, order: 4 }
              ]
            }
          }
        ]
      }
    }
  })
  console.log('✓ 測驗題目已創建')

  console.log('\n初始化完成！')
  console.log('管理員帳號：admin@example.com')
  console.log('管理員密碼：admin123')
}

main()
  .catch((e) => {
    console.error('初始化失敗:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
