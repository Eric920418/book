import Link from "next/link";

export default function QuizManualPage() {
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
              MAIA-2 中文版量表
            </h1>
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              使用與解讀說明
            </h2>
          </div>

          {/* 介紹文字 */}
          <div className="text-center mb-6 md:mb-8 space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
            <p>
              這份量表能幫助你更清楚地認識自己的身體覺察能力，
              <br />
              看見此刻的身心狀態。
            </p>
            <p>請把它當成一面溫柔的鏡子，而不是考卷。</p>
            <p>
              搭配閱讀《你不是破碎，而是入口》
              <br />
              與線上 17 分鐘身心學導引，你將一步步回到身體的家。
            </p>
          </div>

          {/* 第一張卡片：使用前的心態 + 作答方式 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            {/* 使用前的心態 */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">❤️</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  使用前的心態
                </h2>
              </div>
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                <div>
                  <p className="font-semibold text-black mb-1">
                    沒有對錯、高低之分
                  </p>
                  <p>這份量表不是診斷工具，也不是能力測驗。</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-1">
                    重點在「前後對照」
                  </p>
                  <p>
                    不是看一次的分數高低，而是觀察幾週或幾個月後的變化。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-1">
                    用好奇與善意面對結果
                  </p>
                  <p>
                    分數只是當下狀態的映照，請不批判自己，也不強求「進步」。
                  </p>
                </div>
              </div>
            </div>

            {/* 作答方式 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">📝</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  作答方式
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  共 37 題，請依照你「平常的生活狀態」，
                  <br />
                  在 0～5 分之間作答：
                </p>
                <p className="font-semibold text-black">
                  0 = 從不　　5 = 總是如此
                </p>
                <p>完成後，</p>
                <p>
                  系統會依官方規則計算 8 個面向的平均分，並畫出雷達圖。
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  若使用紙本，可依說明自行加總並換算平均分；詳細計分方式請參考官方文件。
                </p>
              </div>
            </div>
          </div>

          {/* 第二張卡片：結果解讀 - 8 個面向 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-2xl md:text-3xl">🧭</div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                結果解讀：8 個面向
              </h2>
            </div>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                MAIA-2 不提供「總分」，
                <br />
                而是從 8 個不同面向描繪你的身體覺察輪廓
              </p>
              <p className="font-semibold text-black">面向 代表能力 題號 ()</p>

              {/* 8 個面向列表 */}
              <div className="space-y-4">
                {/* 1. 注意 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      注意 (Noticing)
                    </p>
                    <p>察覺呼吸、緊繃或舒適等身體變化</p>
                    <p className="text-sm text-gray-600">(1, 2, 3, 4)</p>
                  </div>
                </div>

                {/* 2. 不分心 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      不分心 (Not-Distracting)
                    </p>
                    <p>能面對不適，不逃避或壓抑</p>
                    <p className="text-sm text-gray-600">(5, 6, 7, 8, 9, 10)</p>
                  </div>
                </div>

                {/* 3. 不擔心 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      不擔心 (Not-Worrying)
                    </p>
                    <p>面對不適時不陷入焦慮或恐懼</p>
                    <p className="text-sm text-gray-600">(11, 12, 13, 14, 15)</p>
                  </div>
                </div>

                {/* 4. 注意調節 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      注意調節 (Attention Regulation)
                    </p>
                    <p>能主動把注意力帶回身體，如呼吸錨定</p>
                    <p className="text-sm text-gray-600">
                      (16, 17, 18, 19, 20, 21, 22)
                    </p>
                  </div>
                </div>

                {/* 5. 情緒覺察 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      情緒覺察 (Emotional Awareness)
                    </p>
                    <p>感受情緒如何在身體中顯現</p>
                    <p className="text-sm text-gray-600">(23, 24, 25, 26, 27)</p>
                  </div>
                </div>

                {/* 6. 自我調節 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    6
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      自我調節 (Self-Regulation)
                    </p>
                    <p>透過身體感受調節情緒與喚起</p>
                    <p className="text-sm text-gray-600">(28, 29, 30, 31, 32)</p>
                  </div>
                </div>

                {/* 7. 身體聆聽 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    7
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      身體聆聽 (Body Listening)
                    </p>
                    <p>細膩傾聽身體訊息，從中獲得方向感</p>
                    <p className="text-sm text-gray-600">(33, 34, 35)</p>
                  </div>
                </div>

                {/* 8. 身體信任 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold text-black">
                    8
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      身體信任 (Trusting)
                    </p>
                    <p>感到身體是安全、可靠的地方</p>
                    <p className="text-sm text-gray-600">(36, 37)</p>
                  </div>
                </div>
              </div>

              {/* 底部說明 */}
              <div className="mt-6 pt-6 border-t border-gray-300 space-y-3">
                <p>這些面向彼此獨立，沒有高低排序，也不需相加。</p>
                <p>
                  請觀察你得分的「形狀」
                  <br />
                  哪個面向較強、哪個相對薄弱，這就是你的「覺察輪廓」。
                </p>
              </div>
            </div>
          </div>

          {/* 第三張卡片：如何使用結果 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                ?
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                如何使用結果
              </h2>
            </div>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                觀察整體輪廓：雷達圖就像一張覺察地圖，
              </p>
              <p>
                凹的地方 → 代表目前相對薄弱的能力
                <br />
                凸的地方 → 代表你已有的內在資源
              </p>
              <p>
                重點在變化：隔幾週或幾個月再測一次，
                <br />
                看看哪個面向逐漸撐開，哪個仍需要更多時間與練習。
              </p>
              <div className="flex items-start gap-3 mt-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🎯</div>
                <div>
                  <p className="font-semibold text-black mb-2">
                    給自己方向，不是壓力：
                  </p>
                  <p className="mb-2">例如：</p>
                  <p className="mb-2">
                    「身體信任」偏低 → 表示目前對身體的安全感較弱，可以從穩定呼吸、柔和地回到身體開始。
                  </p>
                  <p>
                    「注意調節」上升 → 代表你越來越能在生活中錨定自己，這是一個重要轉變。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 小提醒框（深灰色） */}
          <div className="bg-gray-600 text-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 text-xl md:text-2xl">☁️</div>
              <h3 className="text-lg md:text-2xl font-bold">小提醒</h3>
            </div>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base leading-relaxed">
              <p>不需要一次就「改善」所有面向。</p>
              <p>對分數低的部分，用好奇和耐心對待，而不是評價。</p>
              <p>
                每一次測驗都是記錄當下的狀態，就像為自己拍一張「身心快照」。
              </p>
            </div>
          </div>

          {/* 第四張卡片：延伸練習與支持 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">🏁</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  延伸練習與支持
                </h2>
              </div>
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>這份量表是整本書的重要延伸工具之一</p>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-2xl md:text-3xl">📖</div>
                  <p>
                    閱讀《你不是破碎，而是入口》 ──
                    <br />
                    在文字中重新認識身體與覺察的力量。
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-2xl md:text-3xl">🧘</div>
                  <p>
                    線上 10 分鐘身心學導引（掃描 QR code） ──
                    <br />
                    跟著聲音回到身體，透過呼吸、覺察與溫柔的引導，親身「體驗」量表所測的能力，讓理解變成身體的記憶。
                  </p>
                </div>
              </div>
            </div>

            {/* 最後 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-2xl md:text-3xl">💬</div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  最後
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>這份量表的目的是</p>
                <p>
                  幫助你在生活與練習的過程中，更清楚地看見自己與身體的關係，
                </p>
                <p>並以此作為「回到身體」的路標。</p>
              </div>
            </div>
          </div>

          {/* 第五張卡片：資料來源 */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-2xl md:text-3xl">🔗</div>
              <h2 className="text-xl md:text-3xl font-bold text-black">
                資料來源
              </h2>
            </div>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p>Mehling W.E. et al. (2018). MAIA-2. UCSF Osher Center.</p>
              <p>中文版（2020）：UCSF Osher Center</p>
              <p>Teng et al. (2022). Frontiers in Psychiatry</p>
            </div>
          </div>

          {/* 底部按鈕 */}
          <div className="text-center mt-8 md:mt-12 space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/quiz"
              className="inline-block bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              開始測驗
            </Link>
            <Link
              href="/"
              className="inline-block bg-white border-2 border-black text-black px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-black hover:text-white transition-all font-semibold"
            >
              返回主頁
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
