import Link from "next/link";

export default function QuizManualPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/quiz" className="text-xl font-bold text-primary hover:opacity-80">
              ← 返回測驗頁面
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>📖 MAIA-2 中文版量表｜使用與解讀說明</h1>

          <p className="lead">
            這份量表能幫助你更清楚地認識自己的身體覺察能力，看見此刻的身心狀態。<br />
            請把它當成一面溫柔的鏡子，而不是考卷。
          </p>

          <p>
            搭配閱讀《你不是破碎，而是入口》與線上 <Link href="/guide" className="text-primary hover:underline">13 分鐘身心學導引</Link>，你將一步步回到身體的家。
          </p>

          <hr />

          <h2>🌿 使用前的心態</h2>
          <ul>
            <li><strong>✨ 沒有對錯、高低之分</strong>：這份量表不是診斷工具，也不是能力測驗。</li>
            <li><strong>📅 重點在「前後對照」</strong>：不是看一次的分數高低，而是觀察幾週或幾個月後的變化。</li>
            <li><strong>💛 用好奇與善意面對結果</strong>：分數只是當下狀態的映照，請不批判自己，也不強求「進步」。</li>
          </ul>

          <hr />

          <h2>📝 作答方式</h2>
          <p>
            共 <strong>37 題</strong>，請依照你「平常的生活狀態」，在 0～5 分之間作答：
          </p>
          <p className="text-center font-semibold text-xl">
            0 = 從不　　5 = 總是如此
          </p>
          <p>
            完成後，系統會依官方規則計算 8 個面向的平均分，並畫出雷達圖。
          </p>
          <p className="text-sm text-foreground/70">
            若使用紙本，可依說明自行加總並換算平均分；詳細計分方式請參考官方文件。
          </p>

          <hr />

          <h2>🧭 結果解讀：8 個面向</h2>
          <p>
            MAIA-2 不提供「總分」，而是從 8 個不同面向描繪你的身體覺察輪廓👇
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>面向</th>
                  <th>代表能力</th>
                  <th>題號</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>注意<br />(Noticing)</strong></td>
                  <td>察覺呼吸、緊繃或舒適等身體變化</td>
                  <td>1, 2, 3, 4</td>
                </tr>
                <tr>
                  <td><strong>不分心<br />(Not-Distracting)</strong></td>
                  <td>能面對不適，不逃避或壓抑</td>
                  <td>5, 6, 7, 8, 9, 10</td>
                </tr>
                <tr>
                  <td><strong>不擔心<br />(Not-Worrying)</strong></td>
                  <td>面對不適時不陷入焦慮或恐懼</td>
                  <td>11, 12, 13, 14, 15</td>
                </tr>
                <tr>
                  <td><strong>注意調節<br />(Attention Regulation)</strong></td>
                  <td>能主動把注意力帶回身體，如呼吸錨定</td>
                  <td>16, 17, 18, 19, 20, 21, 22</td>
                </tr>
                <tr>
                  <td><strong>情緒覺察<br />(Emotional Awareness)</strong></td>
                  <td>感受情緒如何在身體中顯現</td>
                  <td>23, 24, 25, 26, 27</td>
                </tr>
                <tr>
                  <td><strong>自我調節<br />(Self-Regulation)</strong></td>
                  <td>透過身體感受調節情緒與喚起</td>
                  <td>28, 29, 30, 31, 32</td>
                </tr>
                <tr>
                  <td><strong>身體聆聽<br />(Body Listening)</strong></td>
                  <td>細膩傾聽身體訊息，從中獲得方向感</td>
                  <td>33, 34, 35</td>
                </tr>
                <tr>
                  <td><strong>身體信任<br />(Trusting)</strong></td>
                  <td>感到身體是安全、可靠的地方</td>
                  <td>36, 37</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg my-6">
            <p>👉 這些面向彼此獨立，沒有高低排序，也不需相加。</p>
            <p>👉 請觀察你得分的「形狀」：哪個面向較強、哪個相對薄弱，這就是你的「覺察輪廓」。</p>
          </div>

          <hr />

          <h2>📊 如何使用結果</h2>

          <h3>🌀 觀察整體輪廓</h3>
          <p>雷達圖就像一張覺察地圖，</p>
          <ul>
            <li><strong>凹的地方</strong> → 代表目前相對薄弱的能力</li>
            <li><strong>凸的地方</strong> → 代表你已有的內在資源</li>
          </ul>

          <h3>🔄 重點在變化</h3>
          <p>
            隔幾週或幾個月再測一次，看看哪個面向逐漸撐開，哪個仍需要更多時間與練習。
          </p>

          <h3>🎯 給自己方向，不是壓力</h3>
          <p>例如：</p>
          <ul>
            <li>「<strong>身體信任</strong>」偏低 → 表示目前對身體的安全感較弱，可以從穩定呼吸、柔和地回到身體開始。</li>
            <li>「<strong>注意調節</strong>」上升 → 代表你越來越能在生活中錨定自己，這是一個重要轉變。</li>
          </ul>

          <hr />

          <h2>☁ 小提醒</h2>
          <ul>
            <li>不需要一次就「改善」所有面向。</li>
            <li>對分數低的部分，用好奇和耐心對待，而不是評價。</li>
            <li>每一次測驗都是記錄當下的狀態，就像為自己拍一張「身心快照」。</li>
          </ul>

          <hr />

          <h2>🌱 延伸練習與支持</h2>
          <p>這份量表是整本書的重要延伸工具之一👇</p>
          <ul>
            <li>
              <strong>📖 閱讀《你不是破碎，而是入口》</strong> —— 在文字中重新認識身體與覺察的力量。
            </li>
            <li>
              <strong>🎧 線上 10 分鐘身心學導引</strong>（
              <Link href="/guide" className="text-primary hover:underline">點此前往</Link>
              ）—— 跟著聲音回到身體，透過呼吸、覺察與溫柔的引導，親身「體驗」量表所測的能力，讓理解變成身體的記憶。
            </li>
          </ul>

          <hr />

          <h2>📌 最後</h2>
          <p className="text-lg">
            這份量表的目的是👇
          </p>
          <ul className="text-lg">
            <li>👉 幫助你在生活與練習的過程中，更清楚地看見自己與身體的關係，</li>
            <li>👉 並以此作為「回到身體」的路標。</li>
          </ul>

          <hr />

          <h2>📚 資料來源</h2>
          <ul className="text-sm">
            <li>Mehling W.E. et al. (2018). MAIA-2. UCSF Osher Center.</li>
            <li>中文版（2020）：UCSF Osher Center</li>
            <li>Teng et al. (2022). Frontiers in Psychiatry</li>
          </ul>

          <hr />

          <div className="text-center mt-12">
            <Link
              href="/quiz"
              className="inline-block bg-foreground text-background px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              開始測驗
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
