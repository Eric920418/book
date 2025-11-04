import Link from "next/link";

export default function ManualFullPage() {
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
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <article className="max-w-4xl mx-auto prose prose-sm md:prose-lg dark:prose-invert">
          <h1>🧭 13 分鐘身心學導引｜完整版說明書</h1>

          <blockquote>
            <p>Somatics × Polyvagal theory × Somatic Experiencing</p>
          </blockquote>

          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg my-6">
            <p className="font-semibold">📌 本頁為完整手冊</p>
            <p>如果你只是想馬上開始練習，請先閱讀
              <Link href="/guide/manual-simple" className="text-primary hover:underline">《精簡版說明書》</Link>
              ＋播放音檔即可。
            </p>
            <ul className="mt-2 mb-0">
              <li>✅ 快速版：操作卡、馬上開始、門檻低</li>
              <li>📖 完整版：安全解說＋步驟細節＋背景原理，適合想深入理解、教學或長期追蹤使用者。</li>
            </ul>
          </div>

          <hr />

          <h2>🌟 為什麼要做？</h2>
          <p>
            這本書給你地圖，導引給你路。<br />
            每天 13 分鐘，把理解變成身體會做的可重複節律：<br />
            <strong>重量回來、吐氣變長、視野變寬──神經系統更穩、更可調節。</strong>
          </p>

          <hr />

          <h2>🛡️ 開始前（安全與同意）</h2>
          <ul>
            <li>請勿在開車或需高度專注時練習。</li>
            <li>任何時刻都能說「停」：你可隨時睜眼、移手、改姿勢或結束。</li>
            <li>若覺得「太多」，回到腳底與地面接觸；必要時直接停止。</li>
            <li>不適或敏感時：手改放大腿、全程可張眼，以安全為先。</li>
          </ul>

          <hr />

          <h2>🛤️ 路線圖（跟著音檔做即可）</h2>

          <blockquote>
            <p>核心節律：吸4－吐6－吐末停1秒；不舒服就回自然呼吸。</p>
          </blockquote>

          <h3>1. 👁️ 到位 × 同意（Orient & Consent）</h3>
          <p>
            　看見三個中性或舒服的物件，心裡說：我看見你。<br />
            　雙手放胸口＋肚臍上方（或放大腿）；任何接觸都可撤回同意。
          </p>

          <h3>2. 💨 共鳴呼吸（Resonance）</h3>
          <p>
            　用鼻吸 4，用鼻或微張口吐 6，吐末停 1 秒。<br />
            　先兩輪口數，之後在心裡數 4 組；累就回自然呼吸。
          </p>

          <h3>3. 🔀 Yes／No 微幅訊號（幅度 1 公分）</h3>
          <p>　胸前做極小的「是／否」傾向（或只在心中意象）。</p>
          <p>　自問兩題：</p>
          <ul>
            <li>把手放在胸口舒服嗎？</li>
            <li>吐氣再長一拍可以嗎？</li>
          </ul>
          <p>　想靠近、變鬆＝Yes；想離開、變淺＝No；沒傾向也很好。</p>

          <h3>4. 🧭 三向定向（左／右／上或下）</h3>
          <p>
            　只用眼睛移動，頸部保持舒服；回到正前，心裡說：我在這裡，這裡是安全的。
          </p>

          <h3>5. 🎯 三點掃描（眉心／胸口／下腹）</h3>
          <p>
            　每處停兩口，心裡說：我看見你。<br />
            　用兩個詞形容（例：暖／鬆、沉／亮）。<br />
            　想加深可再掃喉／骨盆各兩口；無感也是感覺。
          </p>

          <h3>6. 🫶 手的安放（手＝一盞小燈）</h3>
          <p>
            　胸口＋下腹擇一或兩處，不壓只放。<br />
            　兩輪各三口，維持吸4／吐6／停1：<br />
            　吸氣「光向外擴三成」，吐氣「光回到中心」。<br />
            　個別化：想更多空間→吐氣多一拍；刺激太多→手更輕或移開半掌。
          </p>

          <h3>7. 🌿 微動放鬆（三選一；幅度 1 公分）</h3>
          <ul>
            <li><strong>橫膈蕩漾</strong>：吸肋擴一點；吐胸口融化落下。</li>
            <li><strong>骨盆時鐘</strong>：坐骨在椅面畫小圓（12→3→6→9→12）。</li>
            <li><strong>肩胛浮起</strong>：吸時肩胛向外滑1 公分；吐回中位。</li>
          </ul>
          <p>　重點是滑動，不出力；像水。</p>

          <h3>8. 🌀 完成訊號 × 釋放（Completion）</h3>
          <p>
            　手放大腿，快刷甩手或抖指 8 秒（小而快、手腕主導）。<br />
            　替代：指尖輕點大腿 8 秒，或足尖小踏地 8 秒。<br />
            　出現嘆息／吞嚥／哈欠＝完成訊號，很好。
          </p>

          <h3>9. 🎚️ 片刻自評（量化有感）</h3>
          <p>
            　把剛才最清楚的感覺，給0–10 分。<br />
            　低聲說三個詞（例：溫、慢、在場）。<br />
            　喝一口水或舌尖輕貼上顎。
          </p>

          <h3>10. 🦶 回場（Grounding）</h3>
          <p>
            　注意足底，輕踩地兩下。<br />
            　先看前方 1–2 公尺地面→再擴到整個房間與光。<br />
            　心裡說：我回來了。
          </p>

          <hr />

          <h2>⏱️ 劑量 × 節奏</h2>
          <ul>
            <li>每日 5–10 分鐘（完整 13&apos; 皆可）。</li>
            <li>連續 4 週最有感；規律勝過長度。</li>
            <li><strong>90 秒救急版</strong>：腳底＋長吐兩回合＋看室內一處光 5 秒。</li>
          </ul>

          <hr />

          <h2>🌿 成效指標（任一即算有效）</h2>
          <ul>
            <li><strong>重量回來</strong>：像被椅子／地面托住。</li>
            <li><strong>吐氣變長</strong>：自然更慢更長。</li>
            <li><strong>視野變寬</strong>：不再只盯著一點。</li>
          </ul>

          <blockquote>
            <p>
              兩週：較不易被小聲響嚇到、入睡更快。<br />
              四週：情緒高起後恢復更快、做事節奏自然放慢。
            </p>
          </blockquote>

          <hr />

          <h2>🟢🟡🔴 安全燈號</h2>
          <ul>
            <li><strong className="text-green-600">綠燈</strong>：穩、暖、能跟上 → 繼續。</li>
            <li><strong className="text-yellow-600">黃燈</strong>（頭輕／胸悶／心慌／情緒湧）：腳掌輕壓地 ×3、可張眼、減量再走。</li>
            <li><strong className="text-red-600">紅燈</strong>（銳痛、持續胸痛或呼吸困難、麻木擴散、強烈眩暈）：立刻停止，只做落地＋自然呼吸；必要時就醫。</li>
          </ul>

          <blockquote>
            <p>你永遠可以說 「停」；停下，也是照顧。</p>
          </blockquote>

          <hr />

          <h2>🆘 如果卡住了（快速解）</h2>
          <ul>
            <li><strong>沒感覺</strong>：從手掌或足底開始，只描述溫度／大小／邊界。</li>
            <li><strong>數拍更緊</strong>：先自然 3–5 口，再做兩回合吸4／吐6／停1，或只提醒「吐氣長一點」。</li>
            <li><strong>想哭或發抖</strong>：允許＋拉長吐氣；手改放下肋或腹；仍太多→用90 秒救急版，今天到這裡。</li>
          </ul>

          <hr />

          <h2>📖 與本書的最佳搭配</h2>

          <h3>日課 3 步：</h3>
          <p>
            讀一段 → 做一回 → 在頁邊寫兩個字（例：暖／沉），勾選今天是否出現三個指標。
          </p>

          <h3>每週重整：</h3>
          <p>
            重讀畫線段 3–5&apos; → 完整導引 13&apos; → 依「當下／兩週／四週」各寫一句觀察。
          </p>

          <blockquote>
            <p>本書談重新連結；導引把它變成你每天踩得出的路。</p>
          </blockquote>

          <hr />

          <h2>📈 每天練的好處 × 與 MAIA-2 的變化</h2>
          <p>
            每天 13分鐘搭配閱讀，通常在當下就能感覺到吐氣變長、重量回來、視野打開；持之以恆兩週至一個月，會發現自己更容易「踩煞車」、入睡更快、不再被細微刺激輕易驚動，情緒起伏的恢復速度變快，專注與互動的品質也跟著提升。
          </p>
          <p>
            若搭配 <Link href="/quiz" className="text-primary hover:underline">MAIA-2 衡量表</Link> 使用，這些變化常會反映在分數的緩步上升上，代表你的內感覺與調節力正在穩定建立。建議可每 2–4 週做一次簡單回顧，觀察「閱讀＋導引」如何一點一滴地在身體裡紮根。
          </p>

          <hr />

          <h2>🧠 為什麼這 13 分鐘有效？</h2>
          <p>
            這套導引結合 <strong>Somatics、Somatic Experiencing、Polyvagal Theory</strong> 三大學派的核心：
            透過節律呼吸、安全定向與細膩內感覺練習，每天 5–10 分鐘即可提升迷走神經張力、穩定神經系統基線，逐步強化身體的安全感與自我調節力。
          </p>
          <p>
            多項研究顯示，連續練習 2–4 週後，在 呼吸節律、情緒回復速度、入睡時間、身體覺察與 MAIA-2 量表 上皆能觀察到顯著改善。
            這不是心靈暗示，而是具實證基礎的神經生理變化。
          </p>

          <hr />

          <h2>💬 最後的邀請</h2>
          <p>
            你不必修好自己；只要每天留5 -13分鐘，讓身體說話。<br />
            當你願意慢一點、少一點、真一點，安穩會回來，而你，也會回家。
          </p>

          <hr />

          <div className="text-center mt-12 space-x-4">
            <Link
              href="/guide/manual-simple"
              className="inline-block bg-card border-2 border-foreground text-foreground px-6 py-2 rounded-lg hover:bg-foreground hover:text-background transition-all"
            >
              查看精簡版
            </Link>
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
