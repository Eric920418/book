import Link from "next/link";

export default function ManualSimplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 主要內容 */}
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-4 ">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-sm md:text-xl font-bold text-gray-800 hover:opacity-80"
            >
              ← 返回主頁
            </Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* 標題區域 - 置中 */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-black">
              13 分鐘身心學導引｜精簡版說明書
            </h1>
            <p className="text-base md:text-xl text-gray-600">
              Somatics × Polyvagal × Somatic Experiencing
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              一套溫柔、有效、每天都能練的身體調節法
            </p>
          </div>

          {/* 第一張卡片：為什麼要做 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-xl  font-bold">
                ?
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                為什麼要做
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-0 md:ml-16">
              <p className="text-sm md:text-lg">
                每天 5-17 分鐘，讓身體重新記得節律：
              </p>
              <div className="flex items-start gap-3">
                <span className="text-lg md:text-2xl flex-shrink-0">🍃</span>
                <div className="text-sm md:text-lg space-y-2">
                  <p className="font-medium text-black">
                    重量回來　吐氣變長　視野變寬
                  </p>
                  <p className="text-gray-600">──神經系統更穩、更可調節。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg md:text-2xl flex-shrink-0">⏰</span>
                <div className="text-sm md:text-lg space-y-2">
                  <p className="font-medium text-black">15 秒起手式</p>
                  <p className="text-gray-600">
                    坐穩 → 按播放 → 吸4／吐6／停1 → 跟著做。
                  </p>
                  <p className="text-gray-600">不舒服隨時回自然呼吸。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第二張卡片：路線圖 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-xl md:text-2xl">🗺️</div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                路線圖
                <span className="text-sm md:text-lg text-gray-600 font-normal ml-2">
                  （跟著音檔即可）
                </span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-5">
              {/* 步驟 1 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  1
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">到位×同意：</span>
                  看三個中性物件，心裡說「我看見你」。雙手胸+腹／或放大腿。
                </div>
              </div>

              {/* 步驟 2 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  2
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">共鳴呼吸：</span>
                  吸4、吐6、停1。兩輪口數、四輪心數；累了就回自然呼吸。
                </div>
              </div>

              {/* 步驟 3 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  3
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    Yes／No 微偵訊號：
                  </span>
                  胸前1公分「是／否」，自問兩題（手放胸口舒服嗎？吐氣再長一拍可以嗎？）。
                </div>
              </div>

              {/* 步驟 4 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  4
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">三向定向：</span>
                  視線左→右→上／下；回中說「我在這裡，這裡是安全的」。
                </div>
              </div>

              {/* 步驟 5 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  5
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">三點掃描：</span>
                  肩心／胸／下腹，各兩口，用兩詞形容（例：暖／鬆）。
                </div>
              </div>

              {/* 步驟 6 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  6
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    手的安放（小燈）：
                  </span>
                  胸或腹，吸氣光擴三成，吐氣光回中心。
                </div>
              </div>

              {/* 步驟 7 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  7
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    微動放鬆（三選一）：
                  </span>
                  橫膈薄漾／骨盆時鐘／肩胛滑動，幅度1公分，像水。
                </div>
              </div>

              {/* 步驟 8 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  8
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">釋放：</span>
                  甩手或抖指尖秒；或指尖點大腿、足尖小踏地。嘆息／吞嚥一完成。
                </div>
              </div>

              {/* 步驟 9 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  9
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">片刻自評：</span>
                  給感覺0~10分；說三個詞；喝水或舌尖貼上顎。
                </div>
              </div>

              {/* 步驟 10 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8  text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  10
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">回場：</span>
                  注意足底，輕踩地，視線從近擴大，心裡說「我回來了」。
                </div>
              </div>
            </div>
          </div>

          {/* 第三張卡片：劑量節奏、成效指標、安全燈號 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            {/* 劑量 × 節奏 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 text-xl md:text-2xl">⏳</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  劑量 × 節奏
                </h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm md:text-base font-semibold text-black">
                  每日 5-17 分鐘
                </p>
                <p className="text-sm md:text-base">
                  連續 4 週最有感，規律勝過長度。
                </p>
                <div className="flex items-start gap-2 bg-black text-white p-3 md:p-4 rounded-lg">
                  <span className="flex-shrink-0 text-base md:text-lg">
                    SOS
                  </span>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">90 秒救急版：</span>
                    腳底+長吐兩回合 + 看至內一處光 5 秒。
                  </p>
                </div>
              </div>
            </div>

            {/* 成效指標 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 text-xl md:text-2xl">🎯</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  成效指標
                  <span className="text-sm md:text-lg text-gray-600 font-normal ml-2">
                    （任一即算有效）
                  </span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg text-gray-700">✓</span>
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    重量回來
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg text-gray-700">✓</span>
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    吐氣變長
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg text-gray-700">✓</span>
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    視野變寬
                  </span>
                </div>
              </div>
            </div>

            {/* 安全燈號 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 text-xl md:text-2xl">🚦</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  安全燈號
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 text-sm md:text-base font-bold text-green-600">
                    綠燈：
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    穩、暖、能跟上 → 繼續
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 text-sm md:text-base font-bold text-yellow-600">
                    黃燈：
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    腳掌壓地×3、張眼、減量
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 text-sm md:text-base font-bold text-red-600">
                    紅燈：
                  </span>
                  <p className="text-sm md:text-base text-gray-700">
                    立刻停止，只做落地+自然呼吸；必要時就醫
                  </p>
                </div>
              </div>
            </div>

            {/* 想更深入？ */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  ?
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  想更深入？
                </h2>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                科學依據、MAIA-2 自我觀察、完整解說 →<br />
                請見「完整版說明書」
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
