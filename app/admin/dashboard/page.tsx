'use client'

import { useState, useEffect } from 'react'
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
import { Line, Bar, Pie } from 'react-chartjs-2'

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

interface QuizResult {
  id: string
  email: string
  totalScore: number
  createdAt: string
  quiz: {
    title: string
  }
}

interface DashboardStats {
  totalResults: number
  todayResults: number
  averageScore: number
  wisdomTypeDistribution: {
    type: string
    count: number
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
  const [results, setResults] = useState<QuizResult[]>([])
  const [adminName, setAdminName] = useState('')

  useEffect(() => {
    checkAuth()
    fetchDashboardData()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin')
      return
    }
    
    // 解析 JWT 獲取管理員名稱
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      setAdminName(payload.name)
    } catch (error) {
      console.error('解析 token 失敗')
    }
  }

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      
      // 獲取統計資料
      const statsResponse = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setStats(statsData.data)
      }
      
      // 獲取最新測驗結果
      const resultsResponse = await fetch('/api/admin/results?limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (resultsResponse.ok) {
        const resultsData = await resultsResponse.json()
        setResults(resultsData.data)
      }
      
    } catch (error) {
      console.error('獲取資料失敗:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin')
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

  const pieChartData = {
    labels: stats?.wisdomTypeDistribution.map(d => d.type) || [],
    datasets: [
      {
        data: stats?.wisdomTypeDistribution.map(d => d.count) || [],
        backgroundColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
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
              <p className="text-sm text-foreground/70">歡迎回來，{adminName}</p>
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

          {/* 智慧類型分布 */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">智慧類型分布</h3>
            <div className="h-[300px]">
              <Pie data={pieChartData} options={chartOptions} />
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
                    測驗者
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    測驗名稱
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    分數
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    測驗時間
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {results.map((result) => (
                  <tr key={result.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{result.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">{result.quiz.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {result.totalScore} 分
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/70">
                      {new Date(result.createdAt).toLocaleString('zh-TW')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link
                        href={`/quiz/result/${result.id}`}
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        查看詳情
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
