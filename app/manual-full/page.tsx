import Link from "next/link";

export default function ManualFullPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 主要內容 */}
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
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
          <div className="text-center mb-8 md:mb-12 mt-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-black">
              《回到身體》17 分鐘身心學導引
            </h1>
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
              完整版說明書
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-2">
              Somatics × Polyvagal × Somatic Experiencing
            </p>
          </div>

          {/* 提示文字 */}
          <div className="text-center mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-gray-800 mb-3">
              本頁為完整手冊
            </p>
            <p className="text-sm md:text-base text-gray-700">
              如果你只是想馬上開始練習，
            </p>
            <p className="text-sm md:text-base text-gray-700">
              請先閱讀{" "}
              <Link
                href="/manual-simple"
                className="font-semibold text-black hover:underline"
              >
                《快速版說明書》
              </Link>{" "}
              + 播放音檔即可。
            </p>
          </div>

          {/* 主要卡片 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200">
            {/* 快速版 vs 完整版 */}
            <div className="space-y-4 md:space-y-5 mb-8">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl flex-shrink-0">🚀</span>
                <div className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-black">快速版：</span>
                  操作卡、馬上開始、門檻低
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl flex-shrink-0">📖</span>
                <div className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-black">完整版：</span>
                  安全解說＋步驟細節＋背景原理，適合想深入理解、教學或長期追蹤使用者。
                </div>
              </div>
            </div>

            {/* 歡迎文字 */}
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                歡迎，這是一份專為你準備的禮物。
                <br />
                這不只是一段冥想，這是一份 17
                分鐘的「神經系統調節指南」。它融合了當代身心學
                (Somatics)、Somatic Experiencing 與多重迷走神經理論(Polyvagal
                Theory) 三大頂尖學派的精華，是我將
                <span className="font-semibold text-black">
                  《你不是破碎而是入口》
                </span>
                這本書的核心，轉化而成的真實體驗。這是一份強大且絕對安全的邀請，讓你從「知道」走向「感覺到」。
              </p>
            </div>
          </div>

          {/* 第二張卡片：為什麼要做 + 開始前 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            {/* 為什麼要做 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  ?
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  為什麼要做
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>這本書給你地圖，導引給你路。</p>
                <p>
                  每天 17 分鐘，把理解變成身體會做的可重複節律：
                  <br />
                  <span className="font-semibold text-black">
                    重量回來、吐氣變長、視野變寬──
                  </span>
                  <br />
                  神經系統更穩、更可調節。
                </p>
              </div>
            </div>

            {/* 開始前（安全與同意） */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🖐️</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  開始前
                  <span className="text-base md:text-lg text-gray-600 font-normal ml-2">
                    （安全與同意）
                  </span>
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-lg md:text-xl flex-shrink-0">🚗</span>
                  <p>請勿在開車或需高度專注時練習。</p>
                </div>
                <p>
                  任何時刻都能說「停」：
                  <br />
                  你可隨時睜眼、移手、改姿勢或結束。
                  <br />
                  若覺得「太多」，回到腳底與地面接觸；
                  <br />
                  必要時直接停止。不適或敏感時：
                  <br />
                  手改放大腿、全程可張眼，以安全為先。
                </p>
              </div>
            </div>
          </div>

          {/* 第三張卡片：路線圖 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-2xl md:text-3xl">🗺️</div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                路線圖
                <span className="text-base md:text-lg text-gray-600 font-normal ml-2">
                  （跟著音檔即可）
                </span>
              </h2>
            </div>

            {/* 核心節律提示 */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-lg md:text-xl flex-shrink-0">❤️</span>
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-black">核心節律</span>
                  <br />
                  吸4－吐6－吐末停1秒；
                  <br />
                  不舒服就回自然呼吸。
                </p>
              </div>
            </div>

            {/* 10個步驟 */}
            <div className="space-y-5 md:space-y-6">
              {/* 步驟 1 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  1
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    到位×同意（Orient & Consent）
                  </span>
                  <br />
                  看見三個中性或舒服的物件，心裡說：
                  <br />
                  我看見你。雙手放胸口＋肚臍上方
                  <br />
                  （或放大腿）；任何接觸都可撤回同意。
                </div>
              </div>

              {/* 步驟 2 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  2
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    共鳴呼吸（Resonance）
                  </span>
                  <br />
                  用鼻吸 4，用鼻或微張口吐 6，吐末停 1 秒。
                  <br />
                  先兩輪口數，之後在心裡數 4 組；
                  <br />
                  累就回自然呼吸。
                </div>
              </div>

              {/* 步驟 3 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  3
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    Yes／No 微幅訊號（幅度 1公分）
                  </span>
                  <br />
                  胸前 1公分「是／否」。
                  <br />
                  自問兩題（手放胸口舒服嗎？
                  <br />
                  吐氣再長一拍可以嗎？）。
                  <br />
                  想靠近、變鬆＝Yes；想離開、變淺＝No；
                  <br />
                  沒傾向也很好。
                </div>
              </div>

              {/* 步驟 4 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  4
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    三向定向（左／右／上或下）
                  </span>
                  <br />
                  視線左→右→上／下；
                  <br />
                  回中說「我在這裡，這裡是安全的」。
                </div>
              </div>

              {/* 步驟 5 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  5
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    三點掃描（眉心／胸口／下腹）
                  </span>
                  <br />
                  每處停兩口，心裡說：我看見你。
                  <br />
                  用兩個詞形容（例：暖／鬆、沉／亮）。
                  <br />
                  想加深可再掃喉／骨盆各兩口；
                  <br />
                  無感也是感覺。
                </div>
              </div>

              {/* 步驟 6 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  6
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    手的安放（手＝一盞小燈）
                  </span>
                  <br />
                  胸口＋下腹擇一或兩處，不壓只放。
                  <br />
                  兩輪各三口，維持吸4／吐6／停1：
                  <br />
                  吸氣「光向外擴三成」，
                  <br />
                  吐氣「光回到中心」。
                  <br />
                  個別化：想更多空間→吐氣多一拍；
                  <br />
                  刺激太多→手更輕或移開半掌。
                </div>
              </div>

              {/* 步驟 7 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  7
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    微動放鬆（三選一；幅度 1公分）
                  </span>
                  <br />
                  橫膈蕩漾：吸肋擴一點；吐胸口融化落下。
                  <br />
                  骨盆時鐘：坐骨在椅面畫小圓；
                  <br />
                  (12→3→6→9→12）。
                  <br />
                  肩胛浮起：吸時肩胛向外滑1 公分；
                  <br />
                  吐回中位。
                  <br />
                  重點滑動，不出力；像水。
                </div>
              </div>

              {/* 步驟 8 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  8
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    完成訊號 × 釋放（Completion）
                  </span>
                  <br />
                  手放大腿，快刷甩手或抖指 8 秒
                  <br />
                  （小而快、手腕主導）。
                  <br />
                  替代：指尖輕點大腿 8 秒，
                  <br />
                  或足尖小踏地 8 秒。
                  <br />
                  出現嘆息／吞嚥／哈欠＝完成訊號，很好。
                </div>
              </div>

              {/* 步驟 9 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  9
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">
                    片刻自評（量化有感）
                  </span>
                  <br />
                  把剛才最清楚的感覺，給0–10 分。
                  <br />
                  低聲說三個詞（例：溫、慢、在場）。
                  <br />
                  喝一口水或舌尖輕貼上顎。
                </div>
              </div>

              {/* 步驟 10 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-black rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  10
                </div>
                <div className="text-sm md:text-base text-gray-700 pt-0.5">
                  <span className="font-semibold text-black">回場（Grounding）</span>
                  <br />
                  注意足底，輕踩地兩下。
                  <br />
                  先看前方 1–2 公尺地面→再擴到整個房間
                  <br />
                  與光。心裡說：我回來了。
                </div>
              </div>
            </div>
          </div>

          {/* 第四張卡片：劑量×節奏 + 成效指標 + 安全燈號 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            {/* 劑量 × 節奏 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">⏳</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  劑量 × 節奏
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>每日 5–10 分鐘（完整 17&apos; 皆可）。</p>
                <p>連續 4 週最有感，規律勝過長度。</p>
                <div className="flex items-start gap-2 bg-black text-white p-3 md:p-4 rounded-lg">
                  <span className="flex-shrink-0 text-base md:text-lg font-bold">
                    SOS
                  </span>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">90 秒救急版：</span>
                    腳底＋長吐兩回合＋看室內一處光 5 秒。
                  </p>
                </div>
              </div>
            </div>

            {/* 成效指標 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🎯</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  成效指標
                  <span className="text-base md:text-lg text-gray-600 font-normal ml-2">
                    （任一即算有效）
                  </span>
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 text-lg">✓</span>
                  <p>
                    <span className="font-semibold text-black">重量回來：</span>
                    像被椅子／地面托住。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 text-lg">✓</span>
                  <p>
                    <span className="font-semibold text-black">吐氣變長：</span>
                    自然更慢更長。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 text-lg">✓</span>
                  <p>
                    <span className="font-semibold text-black">視野變寬：</span>
                    不再只盯著一點。
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p>
                    <span className="font-semibold text-black">兩週：</span>
                    較不易被小聲響嚇到、入睡更快。
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-black">四週：</span>
                    情緒高起後恢復更快、做事節奏自然放慢。
                  </p>
                </div>
              </div>
            </div>

            {/* 安全燈號 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🚦</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  安全燈號
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-green-600">綠燈：</span>
                  穩、暖、能跟上 → 繼續
                </p>
                <p>
                  <span className="font-semibold text-yellow-600">黃燈</span>
                  （頭輕／胸悶／心慌／情緒湧）：
                  <br />
                  腳掌輕壓地 ×3、可張眼、減量再走。
                </p>
                <p>
                  <span className="font-semibold text-red-600">紅燈</span>
                  （銳痛、持續胸痛或呼吸困難、麻木擴散、強烈眩暈）：
                  <br />
                  立刻停止，只做落地＋自然呼吸；必要時就醫
                </p>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="font-semibold text-black">
                    你永遠可以說「停」；停下，也是照顧。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 第五張卡片：如果卡住了 + 與本書的最佳搭配 + MAIA-2 變化 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            {/* 如果卡住了（快速解） */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🆘</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  如果卡住了
                  <span className="text-base md:text-lg text-gray-600 font-normal ml-2">
                    （快速解）
                  </span>
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-black">沒感覺：</span>
                  從手掌或足底開始，只描述溫度／大小／邊界。
                </p>
                <p>
                  <span className="font-semibold text-black">數拍更緊：</span>
                  先自然 3–5 口，再做兩回合吸4／吐6／停1，或只提醒「吐氣長一點」。
                </p>
                <p>
                  <span className="font-semibold text-black">想哭或發抖：</span>
                  允許＋拉長吐氣；手改放下肋或腹；仍太多→用90 秒救急版，今天到這裡。
                </p>
              </div>
            </div>

            {/* 與本書的最佳搭配 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">📖</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  與本書的最佳搭配
                </h2>
              </div>
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                <div>
                  <p className="font-semibold text-black mb-2">日課 3 步：</p>
                  <p>
                    讀一段 → 做一回 → 在頁邊寫兩個字
                    <br />
                    （例：暖／沉），勾選今天是否出現三個指標。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2">每週重整：</p>
                  <p>
                    重讀畫線段 3–5&apos; → 完整導引 17&apos; → 依「當下／兩週／四週」各寫一句觀察。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2">本書談重新連結：</p>
                  <p>導引把它變成你每天踩得出的路。</p>
                </div>
              </div>
            </div>

            {/* 每天練的好處 × 與 MAIA-2 的變化 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">📈</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  每天練的好處 × 與 MAIA-2 的變化
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  每天 17分鐘搭配閱讀，通常在當下就能感覺到吐氣變長、重量回來、視野打開；持之以恆兩週至一個月，會發現自己更容易「踩煞車」、入睡更快、不再被細微刺激輕易驚動，情緒起伏的恢復速度變快，專注與互動的品質也跟著提升。
                </p>
                <p>
                  若搭配 MAIA-2 衡量表使用，這些變化常會反映在分數的緩步上升上，代表你的內感覺與調節力正在穩定建立。建議可每 2–4 週做一次簡單回顧，觀察「閱讀＋導引」如何一點一滴地在身體裡紮根。
                </p>
              </div>
            </div>
          </div>

          {/* 第六張卡片：為什麼這 17分鐘有效 + 最後的邀請 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mt-6">
            {/* 為什麼這 17分鐘有效？ */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🧠</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  為什麼這 17分鐘有效？
                </h2>
              </div>
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  這套導引結合 <strong className="text-black">Somatics、Somatic Experiencing、Polyvagal Theory</strong> 三大學派的核心：
                </p>
                <p>
                  透過節律呼吸、安全定向與細膩內感覺練習，每天 5–10 分鐘即可提升迷走神經張力、穩定神經系統基線，逐步強化身體的安全感與自我調節力。
                </p>
                <p>
                  多項研究顯示，連續練習 2–4 週後，在呼吸節律、情緒回復速度、入睡時間、身體覺察與 MAIA-2 量表 上皆能觀察到顯著改善。
                  這不是心靈暗示，而是具實證基礎的神經生理變化。
                </p>
              </div>
            </div>

            {/* 最後的邀請 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">💬</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  最後的邀請
                </h2>
              </div>
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  你不必修好自己；只要每天留5-17分鐘，
                  <br />
                  讓身體說話。
                </p>
                <p>
                  當你願意慢一點、少一點、真一點，
                  <br />
                  安穩會回來，而你，也會回家。
                </p>
              </div>
            </div>
          </div>

          {/* 底部按鈕 */}
          <div className="text-center mt-8 md:mt-12 space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/manual-simple"
              className="inline-block bg-white border-2 border-black text-black px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-black hover:text-white transition-all font-semibold"
            >
              查看快速版
            </Link>
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              返回主頁
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
