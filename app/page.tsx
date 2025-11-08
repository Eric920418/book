import Link from "next/link";
import Image from "next/image";
import ParticleEffect from "@/components/ParticleEffect";
import AudioGuidePlayer from "@/components/AudioGuidePlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col relative overflow-hidden scroll-smooth">
      {/* 淡淡的波浪背景 */}
      <div className="absolute inset-0 top-[-70%] pointer-events-none z-0">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="120 0 510 800"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="0.8"
            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      {/* 粒子效果 */}
      <ParticleEffect />

      {/* 主視覺區域 */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-8 md:py-24 relative z-10">
        <div className="max-w-4xl w-full text-center">
          {/* 超大標題 */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            你不是破碎
          </h1>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mt-2 md:mt-6">
            而是入口
          </h1>

          {/* 副標題 */}
          <p className="text-base md:text-2xl lg:text-2xl text-[#58595B] tracking-wide mt-6 md:mt-20 mb-3 md:mb-6">
            在身體裡，慢一點，看見光。
          </p>

          {/* 介紹文字 */}
          <div className="space-y-2 md:space-y-6 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            <p className="text-sm md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
              你好，我是 <span className="font-semibold">趙耕樂</span>
              ，徒手物理治療師。
              <br />
              多年臨床的陪伴與看見，我寫成一本書
              <br />
              —— <span className="font-semibold">《你不是破碎，而是入口》</span>。
              <br />
              為了讓療癒不只停在文字，我也準備了導引與量表：
              <br />
              讀，是光；做，是溫；看見，是方向。
            </p>
          </div>

          {/* CTA 按鈕 */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center pt-6 md:pt-20 w-full">
            <a
              href="#audio-guide"
              className="group flex items-center gap-2 md:gap-3 bg-black text-white px-5 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-800 transition-all font-medium text-sm md:text-lg w-full md:min-w-[280px] md:w-auto justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              開始 17 分鐘導引
            </a>
            <Link
              href="/quiz"
              className="group flex items-center gap-2 md:gap-3 bg-white text-black px-5 md:px-8 py-3 md:py-4 rounded-lg border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all font-medium text-sm md:text-lg w-full md:min-w-[280px] md:w-auto justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              進入 MAIA-2 評估
            </Link>
          </div>
        </div>
      </main>

      {/* 第二區塊：核心概念 */}
      <section className="py-8 md:py-20 px-4 md:px-8 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* 三個圓形圖標 */}
          <div className="flex items-center justify-center gap-2.5 md:gap-6 mb-8 md:mb-16">
            {/* 一本書 */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full bg-[#B6B6B6] flex items-center justify-center border-[3px] md:border-[6px] border-[#E8E8E8] shadow-md">
                <div className="text-center">
                  <svg className="w-7 h-7 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-0.5 md:mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                  </svg>
                  <span className="text-white font-bold text-[9px] sm:text-sm md:text-lg">一本書</span>
                </div>
              </div>
            </div>

            {/* × 符號 */}
            <span className="text-lg sm:text-3xl md:text-5xl text-gray-400 font-light mb-1.5 md:mb-8 flex-shrink-0">×</span>

            {/* 一段導引 */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full bg-[#58595B] flex items-center justify-center border-[3px] md:border-[6px] border-[#E8E8E8] shadow-md">
                <div className="text-center">
                  <svg className="w-7 h-7 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-0.5 md:mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>
                  </svg>
                  <span className="text-white font-bold text-[9px] sm:text-sm md:text-lg">一段導引</span>
                </div>
              </div>
            </div>

            {/* × 符號 */}
            <span className="text-lg sm:text-3xl md:text-5xl text-gray-400 font-light mb-1.5 md:mb-8 flex-shrink-0">×</span>

            {/* 一份量表 */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full bg-[#B6B6B6] flex items-center justify-center border-[3px] md:border-[6px] border-[#E8E8E8] shadow-md">
                <div className="text-center">
                  <svg className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 mx-auto mb-0.5 md:mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <span className="text-white font-bold text-[9px] sm:text-sm md:text-lg">一份量表</span>
                </div>
              </div>
            </div>
          </div>

          {/* 說明文字 */}
          <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12">
            <p className="text-base md:text-2xl text-gray-700 leading-relaxed">
              讓閱讀變成身體的經驗，也讓經驗變得可看見。
            </p>
            <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
              從文字 → 到身體 → 到記錄，一步步，回家。
            </p>
          </div>

          {/* 灰色資訊框 */}
          <div className="bg-[#A8A9AB] rounded-xl md:rounded-2xl p-5 md:p-10 text-white max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
              </svg>
              <h3 className="text-base md:text-xl font-bold">首光啟動版</h3>
            </div>
            <div className="text-xs md:text-sm leading-relaxed md:leading-loose space-y-1">
              <p>謝謝你，成為最早相信、最早同行的人。</p>
              <p>這份早鳥讀，不是「更多」，而是「更早一點」— 更早感受書的光、更近地走進療癒的開始。</p>
              <p>你是讓這本書成為可能的人， 也是我最想親手送出這份禮的一群人。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 第三區塊：音頻播放器 */}
      <AudioGuidePlayer />

      {/* 第四區塊：MAIA-2 內感受量表 */}
      <section className="py-8 md:py-20 px-4 md:px-8 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F9F9F9] rounded-xl md:rounded-3xl p-5 md:p-12 shadow-sm">
            {/* 標題 */}
            <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
              <svg className="w-7 h-7 md:w-10 md:h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900">MAIA-2內感受量表</h2>
            </div>

            {/* 說明文字 */}
            <div className="space-y-3 md:space-y-6 mb-6 md:mb-10 text-gray-700">
              <p className="text-base md:text-xl leading-relaxed">
                一份描繪「我與身體關係」的8個面向量表。
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                完成即可看到雷達圖與分向平均，
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                幫助你看到自己的變化。
              </p>
            </div>

            {/* 開始測驗按鈕 */}
            <Link
              href="/quiz"
              className="block w-full bg-black text-white text-center py-3 md:py-4 rounded-lg md:rounded-xl hover:bg-gray-800 transition-all font-medium text-base md:text-lg mb-4 md:mb-6"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>開始測驗</span>
              </div>
            </Link>

            {/* 完整量表說明書按鈕 */}
            <Link
              href="/quiz/manual"
              className="block w-full flex items-center justify-center gap-1.5 md:gap-2 border-2 border-gray-900 text-gray-900 py-2.5 md:py-3 rounded-lg md:rounded-xl hover:bg-gray-50 transition-all font-medium text-sm md:text-base mb-6 md:mb-10"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
              </svg>
              <span>完整量表說明書</span>
            </Link>

            {/* 底部說明文字 */}
            <div className="text-gray-600 text-xs md:text-sm space-y-1 md:space-y-2">
              <p>建議第一次作為基線，4-8周後再重測。</p>
              <p>本階段不留存資料，結果只在你的裝置顯示。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 第五區塊：購買連結 */}
      <section className="py-8 md:py-20 px-4 md:px-8 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F9F9F9] rounded-xl md:rounded-3xl p-5 md:p-12 shadow-sm">
            {/* 標題 */}
            <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
              <svg className="w-7 h-7 md:w-10 md:h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
              </svg>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900">購買連結</h2>
            </div>

            {/* 書名 */}
            <div className="text-center mb-6 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                《你不是破碎，而是入口》
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
                —— 在文字裡點燈，在身體裡安住。
              </p>
            </div>

            {/* 購書按鈕 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 博客來 */}
              <a
                href="https://www.books.com.tw/search?query=你不是破碎而是入口"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border-2 border-gray-300 py-4 px-6 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <Image
                  src="/image 8.png"
                  alt="博客來"
                  width={200}
                  height={50}
                  className="h-8 w-auto"
                />
              </a>

              {/* 誠品線上 */}
              <a
                href="https://www.eslite.com/Search?keyword=你不是破碎而是入口"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border-2 border-gray-300 py-4 px-6 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <Image
                  src="/image 10.png"
                  alt="誠品線上"
                  width={200}
                  height={50}
                  className="h-8 w-auto"
                />
              </a>

              {/* 讀冊生活 */}
              <a
                href="https://www.taaze.tw/search.html?keyword=你不是破碎而是入口"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border-2 border-gray-300 py-4 px-6 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <Image
                  src="/image 9.png"
                  alt="讀冊生活"
                  width={200}
                  height={50}
                  className="h-8 w-auto"
                />
              </a>

              {/* 出版社 */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white border-2 border-gray-300 py-4 px-6 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium text-lg">出版社</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 第六區塊：作者簡介 */}
      <section className="py-8 md:py-20 px-4 md:px-8 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F9F9F9] rounded-xl md:rounded-3xl p-5 md:p-12 shadow-sm">
            {/* 標題 */}
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <svg className="w-7 h-7 md:w-10 md:h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2 className="text-lg md:text-3xl font-bold text-gray-900">作者簡介 | About the Author</h2>
            </div>

            {/* 簡短介紹 */}
            <div className="mb-6 md:mb-8">
              <p className="text-sm md:text-base leading-relaxed text-gray-700 font-semibold mb-4 md:mb-6">
                趙耕樂（徒手物理治療師）有著超過20多年的臨床實戰經驗、長期在世界各地行腳、受聘於十方各處的邀約。曾經是巴拉圭前總統和副總統的私人健康顧問、南美洲多位大使、台灣、香港和中國大陸的政商名流私人治療師、巴西國家奧運體操隊隨隊物理治療師。
              </p>

              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-lg font-bold text-gray-900">趙耕樂</p>
                <p className="text-sm md:text-base text-gray-700">徒手物理治療師</p>
              </div>

              <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4 md:mb-6">
                畢業於巴西州立大學UNIOESTE物理治療系, 經國家考試物理治療師合格並授予證書及執照於Escuela Osteopatia de Madrid 全球最大最健全的整骨學院 六年畢業成為整骨療法師同時也完成以下國際認證課程
              </p>
            </div>

            {/* 認證課程列表 */}
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
              <p>1-「顱薦椎」療法 Upledger Institute - CranioSacral Therapy (CS1, CS2, SER1, SER2, ADV1, TBS1)</p>
              <p>2-「內臟筋膜」鬆動術 Barral Institute – Visceral Manipulation (VM1, VM2, VM3, VM4, VM5, LT, VVML, SCB1, MASP, CSAA, VMAT)</p>
              <p>3-「大腦鬆弛術」 Barral Institute - Brain Manipulation (B1)</p>
              <p>4- 神經、靜脈調理術Nerve- Chikly Institute</p>
              <p>5-「肌筋膜」鬆動術 Fascial Manipulation Stecco</p>
              <p>6-「神經」鬆動術 Neuro Manipulation -Barral Institute (NM1, NM2, NM3, NM4)</p>
              <p>7-「關節」鬆動術 Sohier Concept and Maitland Method</p>
              <p>8- 臨床神經動力學 Neurodynamic Solutions-Michael Shacklock</p>
              <p>9- 大腦調理術 Brain Curriculum  - Chikly Health Institute (B1, B2, B3, B4)</p>
              <p>10-「淋巴系統」引導排毒 Lymphatic Drainage - Chikly Institute (LDT1, LDT2 , LDT3)</p>
              <p>11-「韌帶」神經胚胎釋放術 Neuroembriological Release of ligaments - Chikly Institute</p>
              <p>12-「自律神經」平衡及「情緒」釋放 Somatoemocional release- Upledger Institute</p>
              <p>13-「肌肉」平衡術 - neuromuscular balance</p>
              <p>14-「鮑恩」技術療法- Bowen Therapy</p>
              <p>15-「羅夫結構」整合療法 - Rolfing Brazil Institute</p>
              <p>16- 大腦神經原始反射術 Brain Therapy for Neonatal Reflexes & General Reflexes - Chikly Institute</p>
              <p>17- 大腦神經原始反射情緒釋放術 Emotions Related to Each Reflex (BR-ER)- Chikly Institute</p>
              <p>18- 高階「血管」疏通術- Vascular Manipulation- Barral Institute</p>
              <p>19- 創新徒手關節調整技術(New Manual Articular Approach- Barral Institute）</p>
              <p>20- 美式脊椎活化矯正術 (AMCT) - Instituto Terapia Manual Salgado</p>
              <p>21- 徒手脊索&細胞間質液 INReAL-Chikly Institute</p>
              <p>22- 大腦、骨髓減敏排毒療法BMTA- Chikly Institute</p>
              <p>23- 心腦療法 Heart Centered Therapy HTC - Chikly Institute</p>
              <p>24- 胚胎層融合術EPoF - Embryologic Planes of Fusion - Chikly Institute</p>
              <p>25- 內臟淋巴引流 Lymphatic Drainage Visceral (upper TA/ lower AP)- Chikly Institute</p>
              <p>26- 高階胸腔內臟徒手治療 Advanced Visceral Components for Neck And Thorax- Barral Institute</p>
              <p>27- 能量徒手平衡療法 Energetic Balancing- D&apos;Ambrogio Institute</p>
              <p>28- 雪倫惠樂疤痕療法- ScarWork- Sharon Wheeler</p>
              <p>29- 纖維肌痛症和慢性疲勞症候群治療- Fibromyalgia and chronic fatigue syndrome therapy - Chikly Institute</p>
              <p>30- 大腦、顱節律& 骨髓 Brain, Cranial Rhythm, Bone Marrow BRCR- Chickly Institute</p>
              <p>31- Arterial Manipulation Therapy - Kenneth J. Lossing D.O</p>
              <p>32- BoneWork -Sharon Wheeler</p>
              <p>33- 迷走神經與自主神經調節 Vagus Nerve and Autonomic Nervous System (VNANS）- Barral Institute</p>
              <p>34- 迷走神經與自主神經調節- 情緒連結-大腦與能量中心 Vagus Nerve Advanced Technique- Emotion Connection Brain and Energy Centers (VNADEC)- Barral Institute</p>
              <p>35- 頭顱骨病學 Cranial Osteopathy - Torsten Liem</p>
              <p>36- 零平衡 Zero Balancing - Alan Hext</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
