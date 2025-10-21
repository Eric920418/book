"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions, calculateDimensionScores } from "@/lib/maia2-questions";

interface Answers {
  [questionId: number]: number; // questionId: score (0-5)
}

const SCORE_LABELS = ["從不", "很少", "偶爾", "有時", "經常", "總是"];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const selectedScore = answers[currentQuestion.id];

  // 處理分數選擇
  const handleScoreSelect = (score: number) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: score,
    });
  };

  // 下一題
  const handleNext = () => {
    if (selectedScore === undefined) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 最後一題，顯示完成畫面
      setIsCompleted(true);
    }
  };

  // 上一題
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // 儲存結果並跳轉
  const saveAndViewResult = async () => {
    // 計算8個面向的分數
    const dimensionScores = calculateDimensionScores(answers);

    // 存入 localStorage
    const resultData = {
      answers,
      dimensionScores,
      completedAt: new Date().toISOString(),
    };
    localStorage.setItem("maia2_result", JSON.stringify(resultData));

    // 如果有填email，提交到伺服器
    if (email.trim()) {
      setIsSubmitting(true);
      try {
        await fetch("/api/quiz/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            resultData: dimensionScores,
            completedAt: resultData.completedAt,
          }),
        });
      } catch (error) {
        console.error("提交失敗:", error);
      } finally {
        setIsSubmitting(false);
      }
    }

    // 跳轉到結果頁面
    router.push("/quiz/result");
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
            <Link
              href="/quiz/manual"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              量表說明
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {!isCompleted ? (
          // 測驗進行中
          <div className="animate-fade-in">
            {/* 測驗標題 */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                MAIA-2 內感受量表
              </h1>
              <p className="text-foreground/70 text-lg">
                一份描繪「我與身體關係」的 8 個面向量表
              </p>
              <p className="text-sm text-foreground/60 mt-2">
                共 37 題，請依照你「平常的生活狀態」作答
              </p>
            </div>

            {/* 進度條 */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-foreground/70 mb-2">
                <span>
                  問題 {currentQuestionIndex + 1} / {questions.length}
                </span>
                <span>{Math.round(progress)}% 完成</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 問題卡片 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg mb-8">
              <div className="mb-8">
                <div className="text-sm text-foreground/60 mb-2">
                  題目 {currentQuestion.id} / {questions.length}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
                  {currentQuestion.text}
                </h2>
              </div>

              {/* 評分選項 (0-5) */}
              <div className="space-y-4">
                <p className="text-center text-foreground/70 mb-6">
                  請選擇最符合你平常狀態的選項
                </p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {[0, 1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      onClick={() => handleScoreSelect(score)}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        selectedScore === score
                          ? "border-primary bg-primary/10 scale-105"
                          : "border-border hover:border-primary/50 hover:scale-102"
                      }`}
                    >
                      <div className="text-2xl font-bold mb-1">{score}</div>
                      <div className="text-xs text-foreground/70">
                        {SCORE_LABELS[score]}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-foreground/60 mt-4 px-2">
                  <span>← 從不</span>
                  <span>總是 →</span>
                </div>
              </div>
            </div>

            {/* 導航按鈕 */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 rounded-lg border-2 border-foreground/20 hover:bg-foreground/5
                         transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-semibold"
              >
                ← 上一題
              </button>
              <button
                onClick={handleNext}
                disabled={selectedScore === undefined}
                className="px-8 py-3 bg-foreground text-background rounded-lg
                         hover:opacity-90 transition-opacity disabled:opacity-30
                         disabled:cursor-not-allowed font-semibold"
              >
                {currentQuestionIndex === questions.length - 1
                  ? "完成測驗 →"
                  : "下一題 →"}
              </button>
            </div>

            {/* 底部提示 */}
            <div className="mt-8 text-center text-sm text-foreground/60">
              <p>
                建議第一次作為基線，4-8 週後再重測。
                <br />
                本階段不留存資料，結果只在你的裝置顯示。
              </p>
            </div>
          </div>
        ) : (
          // 測驗完成 - Email輸入畫面
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg text-center">
              {/* 完成圖示 */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">測驗完成！</h2>
                <p className="text-foreground/70 text-lg">
                  感謝你完成 MAIA-2 內感受量表
                </p>
              </div>

              {/* Email輸入表單 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  留下您的電子郵件，我們將把完整結果寄給您
                </h3>
                <p className="text-foreground/60 text-sm mb-6">
                  為了讓您能隨時查看測驗結果，請填寫您的電子郵件。<br />
                  我們會將完整的 MAIA-2 覺察輪廓寄送給您。
                </p>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="請輸入您的電子郵件"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary
                           focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all mb-6"
                />

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={saveAndViewResult}
                    disabled={isSubmitting || !email.trim()}
                    className="px-8 py-4 bg-foreground text-background rounded-lg
                             hover:opacity-90 transition-opacity disabled:opacity-50
                             disabled:cursor-not-allowed font-semibold text-lg"
                  >
                    {isSubmitting ? "發送中..." : "查看測驗結果"}
                  </button>
                </div>

                <p className="mt-6 text-xs text-foreground/60">
                  我們尊重您的隱私，電子郵件僅用於發送測驗結果
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
