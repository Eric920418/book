import { redirect } from 'next/navigation'

// 此頁面已廢棄 - MAIA-2 結果使用 localStorage 展示
// 重定向到主結果頁面
export default async function QuizResultPage() {
  redirect('/quiz/result')
}
