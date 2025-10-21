import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

// 根據分數判斷智慧類型
function getWisdomType(score: number) {
  if (score <= 6) {
    return {
      type: '感性智者',
      description: '您是一個重視情感和直覺的人，善於理解他人的情緒，具有豐富的同理心。',
      advice: '繼續培養您的情感智慧，同時也要學習理性思考，達到感性與理性的平衡。'
    }
  } else if (score <= 9) {
    return {
      type: '人際大師',
      description: '您善於處理人際關係，懂得在不同情境中做出適當的回應，是天生的協調者。',
      advice: '您的人際智慧是寶貴的資產，建議多將這項能力運用在團隊合作和領導力發展上。'
    }
  } else if (score <= 12) {
    return {
      type: '理性思想家',
      description: '您擁有清晰的邏輯思維和分析能力，善於解決問題並做出理性的決策。',
      advice: '保持您的理性優勢，同時也要記得關注情感層面，讓決策更加全面。'
    }
  } else {
    return {
      type: '行動領袖',
      description: '您是一個果斷的行動派，有強烈的目標導向和執行力，善於將想法轉化為現實。',
      advice: '您的執行力令人欽佩，建議在行動前多做規劃，並聆聽他人的意見。'
    }
  }
}

export default async function QuizResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // 從資料庫獲取測驗結果
  const result = await prisma.quizResult.findUnique({
    where: { id },
    include: {
      quiz: true,
      answers: {
        include: {
          option: {
            include: {
              question: true
            }
          }
        }
      }
    }
  })

  if (!result) {
    notFound()
  }

  const wisdomType = getWisdomType(result.totalScore)

  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              書籍形象網站
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-primary transition-colors">首頁</Link>
              <Link href="/quiz" className="hover:text-primary transition-colors">重新測驗</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 結果展示 */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">您的測驗結果</h1>
          <p className="text-xl text-foreground/70">測驗完成時間：{new Date(result.createdAt).toLocaleString('zh-TW')}</p>
        </div>

        {/* 智慧類型卡片 */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-8 text-center animate-fade-in">
          <div className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
            總分：{result.totalScore} 分
          </div>
          <h2 className="text-3xl font-bold mb-4 text-primary">{wisdomType.type}</h2>
          <p className="text-lg text-foreground/80 mb-6">{wisdomType.description}</p>
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="font-semibold mb-2">建議：</h3>
            <p className="text-foreground/70">{wisdomType.advice}</p>
          </div>
        </div>

        {/* 答題詳情 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">答題詳情</h3>
          <div className="space-y-4">
            {result.answers.map((answer, index) => (
              <div key={answer.id} className="bg-card rounded-lg p-6 shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="font-semibold mb-2">
                  問題 {index + 1}：{answer.option.question.text}
                </h4>
                <p className="text-foreground/70">
                  您的答案：{answer.option.text}
                  <span className="ml-2 text-sm">（{answer.option.score} 分）</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 行動呼籲 */}
        <div className="bg-primary/10 rounded-lg p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">想要更深入了解自己嗎？</h3>
          <p className="text-lg text-foreground/70 mb-6">
            閱讀《人生的智慧之書》，探索更多關於 {wisdomType.type} 的智慧與成長之道
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              了解更多書籍資訊
            </Link>
            <Link 
              href="/quiz"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
            >
              重新測驗
            </Link>
          </div>
        </div>

        {/* 提醒 */}
        <div className="mt-8 text-center text-foreground/60">
          <p>測驗結果已發送至您的信箱：{result.email}</p>
          <p className="text-sm mt-2">如未收到郵件，請檢查垃圾郵件匣</p>
        </div>
      </main>
    </div>
  )
}
