'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        // 儲存 token 到 localStorage
        localStorage.setItem('adminToken', data.token)
        // 導向後台首頁
        router.push('/admin/dashboard')
      } else {
        setError(data.error || '登入失敗')
      }
    } catch (error) {
      setError('發生錯誤，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8">
          {/* 標題 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">管理員登入</h1>
            <p className="text-foreground/70">請輸入您的管理員帳號密碼</p>
          </div>

          {/* 錯誤訊息 */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* 登入表單 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                電子郵件
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary 
                         focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                密碼
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary 
                         focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                       hover:bg-primary/90 transition-colors disabled:opacity-50 
                       disabled:cursor-not-allowed font-semibold"
            >
              {isLoading ? '登入中...' : '登入'}
            </button>
          </form>

          {/* 返回首頁 */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              ← 返回首頁
            </Link>
          </div>
        </div>

        {/* 測試提示 */}
        <div className="mt-4 p-4 bg-secondary rounded-lg text-sm text-foreground/70">
          <p className="font-semibold mb-1">測試帳號：</p>
          <p>Email: admin@example.com</p>
          <p>密碼: admin123</p>
        </div>
      </div>
    </div>
  )
}
