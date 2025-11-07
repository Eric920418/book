import Link from "next/link";

export default function ManualSimplePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* 導航欄 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link href="/guide" className="text-sm md:text-xl font-bold text-gray-800 hover:opacity-80">
              ← 返回導引頁面
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 標題區域 - 置中 */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-black">
              13 分鐘身心學導引｜精簡版說明書
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6">
              Somatics × Polyvagal × Somatic Experiencing
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              一套溫柔、有效、每天都能練的身體調節法
            </p>
          </div>

          {/* 一張大卡片 */}
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200">

            {/* 為什麼要做 */}
            <div className="mb-10 md:mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                  ?
                </div>
                <h2 className="text-xl md:text-3xl font-bold mt-1 text-black">為什麼要做</h2>
              </div>
              <div className="space-y-4 text-gray-700 ml-0 md:ml-16">
                <p className="text-sm md:text-lg">
                  每天 5-17 分鐘，讓身體重新記得節律：
                </p>
                <div className="flex items-start gap-3">
                  <span className="text-lg md:text-2xl flex-shrink-0">🍃</span>
                  <div className="text-sm md:text-lg">
                    <p className="font-medium text-black mb-1">重量回來　吐氣變長　視野變寬</p>
                    <p className="text-gray-600">──神經系統更穩、更可調節。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 15 秒起手式 */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl">
                  ⏰
                </div>
                <h2 className="text-xl md:text-3xl font-bold mt-1 text-black">15 秒起手式</h2>
              </div>
              <div className="space-y-3 text-sm md:text-lg text-gray-700 ml-0 md:ml-16">
                <p>
                  坐穩 → 按播放 → 吸4／吐6／停1 → 跟著做。
                </p>
                <p className="text-gray-600">
                  不舒服隨時回自然呼吸。
                </p>
              </div>
            </div>

          </div>

          {/* 返回按鈕 */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/guide"
              className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm md:text-base"
            >
              返回導引頁面
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
