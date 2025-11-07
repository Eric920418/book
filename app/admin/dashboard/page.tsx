'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

// 註冊 Chart.js 組件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
)

interface MAIA2Result {
  id: string
  email: string
  dimensionScores: Record<string, number>
  completedAt: string
  createdAt: string
  metadata?: Record<string, unknown>
}

interface DashboardStats {
  totalResults: number
  todayResults: number
  averageScore: number
  dimensionAverages: Record<string, number>
  topDimensions: {
    dimension: string
    score: number
  }[]
  bottomDimensions: {
    dimension: string
    score: number
  }[]
  dailyResults: {
    date: string
    count: number
  }[]
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [results, setResults] = useState<MAIA2Result[]>([])
  const [authError, setAuthError] = useState<string>('')

  // 安全的 Base64URL 解碼函數
  const base64UrlDecode = (str: string): string => {
    // 1. 將 Base64URL 轉換為標準 Base64（替換字元）
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/')

    // 2. 添加正確的 padding
    const padding = (4 - (base64.length % 4)) % 4
    base64 += '='.repeat(padding)

    // 3. 解碼
    try {
      return atob(base64)
    } catch (error) {
      throw new Error(`Base64 解碼失敗：${error instanceof Error ? error.message : '未知錯誤'}`)
    }
  }

  const checkAuth = useCallback(async (): Promise<boolean> => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin')
      return false
    }

    // 解析 JWT 獲取管理員名稱
    try {
      // 驗證 token 格式
      const parts = token.split('.')
      if (parts.length !== 3) {
        throw new Error(`Token 格式錯誤：JWT 應該包含三個部分，但實際有 ${parts.length} 個部分\n\nToken 預覽：${token.substring(0, 50)}...`)
      }

      // 解析 payload（Base64URL 解碼）
      let payload
      try {
        const base64Payload = parts[1]
        // JWT 使用 Base64URL 編碼，只包含：A-Z, a-z, 0-9, -, _
        if (!/^[A-Za-z0-9_-]+$/.test(base64Payload)) {
          throw new Error(`Payload 部分包含無效的 Base64URL 字元\n\nPayload 預覽：${base64Payload.substring(0, 50)}...`)
        }

        // 使用安全的 Base64URL 解碼函數
        const decodedString = base64UrlDecode(base64Payload)
        payload = JSON.parse(decodedString)
      } catch (decodeError) {
        if (decodeError instanceof Error) {
          if (decodeError.message.includes('Payload 部分包含無效')) {
            throw decodeError
          }
          throw new Error(
            `Base64URL 解碼失敗：${decodeError.message}\n\n` +
            `這通常表示 Token 已損壞或不是有效的 JWT。\n\n` +
            `Token 長度：${token.length} 字元\n` +
            `Payload 長度：${parts[1].length} 字元\n` +
            `Payload 部分：${parts[1].substring(0, 50)}...`
          )
        }
        throw new Error('Base64URL 解碼失敗：未知錯誤')
      }

      // 驗證 payload 必要欄位
      if (!payload.name || !payload.email) {
        throw new Error(
          `Token 內容不完整：缺少必要的用戶資訊\n\n` +
          `已找到的欄位：${Object.keys(payload).join(', ')}\n` +
          `缺少的欄位：${!payload.name ? 'name ' : ''}${!payload.email ? 'email' : ''}`
        )
      }

      // 檢查 token 是否過期
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        const expiredDate = new Date(payload.exp * 1000)
        throw new Error(
          `登入已過期，請重新登入\n\n` +
          `過期時間：${expiredDate.toLocaleString('zh-TW')}\n` +
          `當前時間：${new Date().toLocaleString('zh-TW')}`
        )
      }

      setAuthError('')
      return true // 驗證成功
    } catch (error) {
      const errorMessage = error instanceof Error
        ? `❌ Token 驗證失敗\n\n${error.message}`
        : '❌ Token 驗證失敗：未知錯誤'

      console.error('========== Token 驗證失敗詳細資訊 ==========')
      console.error('錯誤：', error)
      console.error('Token 內容：', token)
      console.error('Token 長度：', token.length)
      console.error('Token 部分：', token.split('.').map((part, i) => `部分 ${i + 1}: ${part.substring(0, 30)}...`))
      console.error('===========================================')

      setAuthError(errorMessage)
      setIsLoading(false) // 停止載入動畫

      // 清除無效的 token
      localStorage.removeItem('adminToken')

      // 3 秒後重定向到登入頁
      setTimeout(() => {
        router.push('/admin')
      }, 3000)

      return false // 驗證失敗
    }
  }, [router])

  const fetchDashboardData = useCallback(async () => {
    try {
      const token = localStorage.getItem('adminToken')

      // 獲取統計資料
      const statsResponse = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!statsResponse.ok) {
        const errorData = await statsResponse.json().catch(() => ({}))
        throw new Error(
          `獲取統計資料失敗 (${statsResponse.status})：${errorData.error || errorData.message || '未知錯誤'}`
        )
      }

      const statsData = await statsResponse.json()
      setStats(statsData.data)

      // 獲取最新測驗結果
      const resultsResponse = await fetch('/api/admin/results?limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!resultsResponse.ok) {
        const errorData = await resultsResponse.json().catch(() => ({}))
        throw new Error(
          `獲取測驗結果失敗 (${resultsResponse.status})：${errorData.error || errorData.message || '未知錯誤'}`
        )
      }

      const resultsData = await resultsResponse.json()
      setResults(resultsData.data)

    } catch (error) {
      const errorMessage = error instanceof Error
        ? `❌ 資料載入錯誤：${error.message}`
        : '❌ 資料載入錯誤：未知錯誤'

      console.error('獲取資料失敗:', error)
      setAuthError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    // 順序執行：先驗證 token，成功後才載入資料
    const init = async () => {
      const isValid = await checkAuth()
      if (isValid) {
        await fetchDashboardData()
      }
    }
    init()
  }, [checkAuth, fetchDashboardData])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin')
  }

  // 計算 MAIA-2 測驗的平均分數
  const calculateAverageScore = (dimensionScores: Record<string, number>): number => {
    const scores = Object.values(dimensionScores)
    if (scores.length === 0) return 0
    const sum = scores.reduce((acc, score) => acc + score, 0)
    return Number((sum / scores.length).toFixed(2))
  }

  // 圖表配置
  const lineChartData = {
    labels: stats?.dailyResults.map(d => d.date) || [],
    datasets: [
      {
        label: '每日測驗人數',
        data: stats?.dailyResults.map(d => d.count) || [],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  // MAIA-2 八個面向柱狀圖
  const dimensionChartData = {
    labels: stats ? Object.keys(stats.dimensionAverages).map(key => {
      // 將英文 key 轉換為中文名稱
      const nameMap: Record<string, string> = {
        noticing: '注意',
        notDistracting: '不分心',
        notWorrying: '不擔心',
        attentionRegulation: '注意調節',
        emotionalAwareness: '情緒覺察',
        selfRegulation: '自我調節',
        bodyListening: '身體聆聽',
        trusting: '身體信任'
      }
      return nameMap[key] || key
    }) : [],
    datasets: [
      {
        label: '平均分數 (0-5分)',
        data: stats ? Object.values(stats.dimensionAverages) : [],
        backgroundColor: 'rgba(88, 89, 91, 0.8)', // 深灰色
        borderColor: 'rgba(88, 89, 91, 1)',
        borderWidth: 1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    }
  }

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    }
  }

  // 如果有認證錯誤，顯示錯誤訊息
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-4">
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-6 text-center">
            <div className="text-red-600 dark:text-red-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl font-bold mb-2">驗證失敗</h2>
              <p className="text-sm whitespace-pre-wrap">{authError}</p>
            </div>
            <p className="text-sm text-foreground/70 mt-4">
              將在 3 秒後自動返回登入頁面...
            </p>
            <button
              onClick={() => router.push('/admin')}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              立即返回登入
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-foreground/70">載入中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 頂部導航 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">管理後台</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                返回前台
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg 
                         hover:bg-secondary/90 transition-colors"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* 統計卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-sm font-medium text-foreground/70 mb-2">總測驗次數</h3>
            <p className="text-3xl font-bold text-primary">{stats?.totalResults || 0}</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-sm font-medium text-foreground/70 mb-2">今日測驗</h3>
            <p className="text-3xl font-bold text-accent">{stats?.todayResults || 0}</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-sm font-medium text-foreground/70 mb-2">平均分數</h3>
            <p className="text-3xl font-bold text-green-600">{stats?.averageScore.toFixed(1) || 0}</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-sm font-medium text-foreground/70 mb-2">轉換率</h3>
            <p className="text-3xl font-bold text-purple-600">
              {stats?.totalResults ? ((stats.todayResults / stats.totalResults) * 100).toFixed(1) : 0}%
            </p>
          </div>
        </div>

        {/* 圖表區域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 每日趨勢圖 */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">測驗趨勢（過去 7 天）</h3>
            <div className="h-[300px]">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>

          {/* MAIA-2 八個面向分布 */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">MAIA-2 八個面向平均分數</h3>
            <div className="h-[300px]">
              <Bar data={dimensionChartData} options={barChartOptions} />
            </div>
          </div>
        </div>

        {/* 最新測驗結果表格 */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold">最新測驗結果</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    測驗類型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    平均分數
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    完成時間
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {results.map((result) => {
                  const avgScore = calculateAverageScore(result.dimensionScores)
                  return (
                    <tr key={result.id} className="hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium">{result.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-foreground/70">MAIA-2 內感受量表</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {avgScore} / 5.00
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/70">
                        {new Date(result.completedAt).toLocaleString('zh-TW')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            // 將測驗結果存入 localStorage 並跳轉到結果頁面
                            localStorage.setItem('maia2Result', JSON.stringify(result.dimensionScores))
                            window.open('/quiz/result', '_blank')
                          }}
                          className="text-primary hover:underline"
                        >
                          查看詳情
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
