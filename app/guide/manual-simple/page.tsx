import Link from "next/link";

export default function ManualSimplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/guide" className="text-xl font-bold text-primary hover:opacity-80">
              ← 返回導引頁面
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>🟦 13 分鐘身心學導引｜精簡版說明書</h1>

          <blockquote>
            <p>Somatics × Polyvagal × Somatic Experiencing<br />
            一套溫柔、有效、每天都能練的身體調節法</p>
          </blockquote>

          <hr />

          <h2>🌿 為什麼要做</h2>
          <p>每天 5-13 分鐘，讓身體重新記得節律：</p>
          <ul>
            <li>👉 重量回來　吐氣變長　視野變寬</li>
            <li>──神經系統更穩、更可調節。</li>
          </ul>

          <hr />

          <h2>🟢 15 秒起手式</h2>
          <p>
            坐穩 → 按播放 → 吸4／吐6／停1 → 跟著做。<br />
            不舒服隨時回自然呼吸。
          </p>

          <hr />

          <h2>🛤 路線圖（跟著音檔即可）</h2>

          <ol>
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

          <hr />

          <h2>⏳ 劑量 × 節奏</h2>
          <p>
            每日 5–13 分鐘<br />
            連續 4 週最有感，規律勝過長度。
          </p>
          <p>
            <strong>🆘 90 秒救急版</strong>：腳底＋長吐兩回合＋看室內一處光 5 秒。
          </p>

          <hr />

          <h2>🌱 成效指標（任一即算有效）</h2>
          <ul>
            <li>✔ 重量回來</li>
            <li>✔ 吐氣變長</li>
            <li>✔ 視野變寬</li>
          </ul>

          <hr />

          <h2>🟢🟡🔴 安全燈號</h2>
          <ul>
            <li><strong className="text-green-600">綠燈</strong>：穩、暖、能跟上 → 繼續</li>
            <li><strong className="text-yellow-600">黃燈</strong>：腳掌壓地×3、張眼、減量</li>
            <li><strong className="text-red-600">紅燈</strong>：立刻停止，只做落地＋自然呼吸；必要時就醫</li>
          </ul>

          <hr />

          <h2>📚 想更深入？</h2>
          <p>
            📌 科學依據、MAIA-2 自我觀察、完整解說 → 請見
            <Link href="/guide/manual-full" className="text-primary hover:underline">
              「完整版說明書」
            </Link>
          </p>

          <hr />

          <div className="text-center mt-12">
            <Link
              href="/guide"
              className="inline-block bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              返回導引頁面
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
