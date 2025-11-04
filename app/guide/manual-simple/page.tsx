import Link from "next/link";

export default function ManualSimplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link href="/guide" className="text-sm md:text-xl font-bold text-primary hover:opacity-80">
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
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
              13 分鐘身心學導引｜精簡版說明書
            </h1>
            <p className="text-base md:text-xl text-foreground/70 mb-4 md:mb-6">
              Somatics × Polyvagal × Somatic Experiencing
            </p>
            <p className="text-sm md:text-lg text-foreground/80">
              一套溫柔、有效、每天都能練的身體調節法
            </p>
          </div>

          {/* 卡片區域 */}
          <div className="space-y-6 md:space-y-8">
            {/* 為什麼要做 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  ?
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">為什麼要做</h2>
              </div>
              <div className="space-y-4 text-foreground/80">
                <p className="text-sm md:text-base">
                  每天 5-13 分鐘，讓身體重新記得節律：
                </p>
                <div className="flex items-start gap-3">
                  <span className="text-lg md:text-xl flex-shrink-0">🍃</span>
                  <div className="text-sm md:text-base">
                    <p className="font-medium">重量回來　吐氣變長　視野變寬</p>
                    <p className="text-foreground/60">──神經系統更穩、更可調節。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 15 秒起手式 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  ⏰
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">15 秒起手式</h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-foreground/80">
                <p>
                  坐穩 → 按播放 → 吸4／吐6／停1 → 跟著做。
                </p>
                <p className="text-foreground/60">
                  不舒服隨時回自然呼吸。
                </p>
              </div>
            </div>

            {/* 路線圖 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  🗺
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">路線圖（跟著音檔即可）</h2>
              </div>
              <ol className="space-y-4 text-sm md:text-base text-foreground/80 list-decimal list-inside">
                <li>
                  <strong>👁 到位 × 同意</strong>：看三個中性物件，心裡說「我看見你」。雙手胸＋腹／或放大腿。
                </li>
                <li>
                  <strong>💨 共鳴呼吸</strong>：吸4、吐6、停1。兩輪口數、四輪心數；累了就回自然呼吸。
                </li>
                <li>
                  <strong>🌊 Yes／No 微幅訊號</strong>：胸前1公分「是／否」，自問兩題（手放胸口舒服嗎？吐氣再長一拍可以嗎？）。
                </li>
                <li>
                  <strong>👁 三向定向</strong>：視線左→右→上／下；回中說「我在這裡，這裡是安全的」。
                </li>
                <li>
                  <strong>✨ 三點掃描</strong>：眉心／胸／下腹，各兩口，用兩詞形容（例：暖／鬆）。
                </li>
                <li>
                  <strong>🫶 手的安放（小燈）</strong>：胸或腹，吸氣光擴三成，吐氣光回中心。
                </li>
                <li>
                  <strong>🌿 微動放鬆（三選一）</strong>：橫膈蕩漾／骨盆時鐘／肩胛滑動，幅度1公分，像水。
                </li>
                <li>
                  <strong>🌀 釋放</strong>：甩手或抖指8秒；或指尖點大腿、足尖小踏地。嘆息／吞嚥＝完成。
                </li>
                <li>
                  <strong>🌡 片刻自評</strong>：給感覺0–10分；說三個詞；喝水或舌尖貼上顎。
                </li>
                <li>
                  <strong>🦶 回場</strong>：注意足底，輕踩地，視線從近擴大，心裡說「我回來了」。
                </li>
              </ol>
            </div>

            {/* 劑量 × 節奏 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  ⏳
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">劑量 × 節奏</h2>
              </div>
              <div className="space-y-4 text-sm md:text-base text-foreground/80">
                <p>
                  每日 5–13 分鐘<br />
                  連續 4 週最有感，規律勝過長度。
                </p>
                <p>
                  <strong>🆘 90 秒救急版</strong>：腳底＋長吐兩回合＋看室內一處光 5 秒。
                </p>
              </div>
            </div>

            {/* 成效指標 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  🌱
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">成效指標（任一即算有效）</h2>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-foreground/80">
                <li>✔ 重量回來</li>
                <li>✔ 吐氣變長</li>
                <li>✔ 視野變寬</li>
              </ul>
            </div>

            {/* 安全燈號 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  🚦
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">安全燈號</h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">🟢 綠燈</span>
                  <span className="text-foreground/80">穩、暖、能跟上 → 繼續</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold flex-shrink-0">🟡 黃燈</span>
                  <span className="text-foreground/80">腳掌壓地×3、張眼、減量</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">🔴 紅燈</span>
                  <span className="text-foreground/80">立刻停止，只做落地＋自然呼吸；必要時就醫</span>
                </li>
              </ul>
            </div>

            {/* 想更深入 */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl md:text-2xl">
                  📚
                </div>
                <h2 className="text-xl md:text-2xl font-bold mt-1">想更深入？</h2>
              </div>
              <p className="text-sm md:text-base text-foreground/80">
                📌 科學依據、MAIA-2 自我觀察、完整解說 → 請見
                <Link href="/guide/manual-full" className="text-primary hover:underline font-semibold ml-1">
                  「完整版說明書」
                </Link>
              </p>
            </div>
          </div>

          {/* 返回按鈕 */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/guide"
              className="inline-block bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm md:text-base"
            >
              返回導引頁面
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
