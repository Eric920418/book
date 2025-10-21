"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { dimensions, getDimensionName, type DimensionKey } from "@/lib/maia2-questions";

// 註冊 Chart.js 組件
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface ResultData {
  answers: Record<number, number>;
  dimensionScores: Record<DimensionKey, number>;
  completedAt: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [resultData, setResultData] = useState<ResultData | null>(null);

  useEffect(() => {
    // 從 localStorage 讀取結果
    const stored = localStorage.getItem("maia2_result");
    if (!stored) {
      // 沒有結果，跳轉回測驗頁
      router.push("/quiz");
      return;
    }

    try {
      const data = JSON.parse(stored);
      setResultData(data);
    } catch (error) {
      console.error("解析結果失敗:", error);
      router.push("/quiz");
    }
  }, [router]);

  if (!resultData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">載入結果中...</p>
        </div>
      </div>
    );
  }

  // 準備雷達圖數據
  const chartData = {
    labels: dimensions.map((d) => d.name),
    datasets: [
      {
        label: "你的覺察輪廓",
        data: dimensions.map((d) => resultData.dimensionScores[d.key]),
        backgroundColor: "rgba(147, 51, 234, 0.2)",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(147, 51, 234, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(147, 51, 234, 1)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          backdropColor: 'transparent',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: 'rgb(107, 114, 128)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (context: any) {
            return `分數: ${context.parsed.r.toFixed(2)} / 5.00`;
          },
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-primary hover:opacity-80">
              《你不是破碎，而是入口》
            </Link>
            <Link href="/quiz/manual" className="text-foreground/70 hover:text-primary transition-colors">
              量表說明
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* 標題 */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-4">
            ✓ 測驗完成
          </div>
          <h1 className="text-4xl font-bold mb-4">你的 MAIA-2 覺察輪廓</h1>
          <p className="text-foreground/70 text-lg">
            這是你與身體關係的 8 個面向快照
          </p>
        </div>

        {/* 雷達圖 */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">你的覺察雷達圖</h2>
          <div className="max-w-2xl mx-auto">
            <Radar data={chartData} options={chartOptions} />
          </div>
          <p className="text-center text-foreground/60 text-sm mt-6">
            * 分數範圍：0（從不）～ 5（總是）
          </p>
        </div>

        {/* 8個面向詳細分數 */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">8 個面向分數</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dimensions.map((dimension) => {
              const score = resultData.dimensionScores[dimension.key];
              const percentage = (score / 5) * 100;

              return (
                <div key={dimension.key} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-lg">{dimension.name}</h3>
                    <span className="text-2xl font-bold text-primary">{score.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-foreground/70">{dimension.description}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 解讀建議 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-4">💡 如何解讀你的結果</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              <strong>凹的地方</strong>（分數較低的面向）→ 代表目前相對薄弱的能力，可以從這裡開始溫柔練習。
            </p>
            <p>
              <strong>凸的地方</strong>（分數較高的面向）→ 代表你已有的內在資源，這是你的優勢。
            </p>
            <p className="text-sm text-foreground/60">
              建議隔 4-8 週再測一次，觀察哪個面向逐漸撐開。重點不在一次的高低，而在前後的變化。
            </p>
          </div>
        </div>

        {/* 下一步建議 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">🎧 每日練習</h3>
            <p className="text-foreground/70 mb-6">
              搭配 13 分鐘身心學導引，讓這些面向逐步穩定成長。
            </p>
            <Link
              href="/guide"
              className="inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              開始導引
            </Link>
          </div>

          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">📚 深入閱讀</h3>
            <p className="text-foreground/70 mb-6">
              在書中找到更多關於身體覺察與內在療癒的智慧。
            </p>
            <a
              href="https://www.books.com.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              購買書籍
            </a>
          </div>
        </div>

        {/* 重新測驗 */}
        <div className="mt-12 text-center">
          <Link
            href="/quiz"
            className="text-foreground/70 hover:text-primary underline"
          >
            重新測驗
          </Link>
        </div>
      </main>
    </div>
  );
}
