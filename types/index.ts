// 書籍相關類型
export interface Book {
  id: string
  title: string
  description: string
  coverImage?: string | null
  audioUrl?: string | null
  publishDate?: Date | null
  isbn?: string | null
  author: Author
  authorId: string
  createdAt: Date
  updatedAt: Date
}

// 作者相關類型
export interface Author {
  id: string
  name: string
  biography: string
  photo?: string | null
  email?: string | null
  website?: string | null
  books?: Book[]
  createdAt: Date
  updatedAt: Date
}

// 測驗相關類型
export interface Quiz {
  id: string
  title: string
  description?: string | null
  isActive: boolean
  questions: Question[]
  createdAt: Date
  updatedAt: Date
}

// 問題類型
export interface Question {
  id: string
  text: string
  order: number
  options: Option[]
  quizId: string
}

// 選項類型
export interface Option {
  id: string
  text: string
  score: number
  order: number
  questionId: string
}

// 測驗結果類型
export interface QuizResult {
  id: string
  email: string
  totalScore: number
  resultData: any
  quiz: Quiz
  quizId: string
  answers: Answer[]
  createdAt: Date
}

// 答案類型
export interface Answer {
  id: string
  resultId: string
  optionId: string
  option: Option
}

// 管理員類型
export interface Admin {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

// API 回應類型
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
