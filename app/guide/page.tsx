"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function GuidePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(780); // 13分鐘 = 780秒

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80">
              ← 返回首頁
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* 標題區塊 */}
          <section className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              一本書 × 一段導引 × 一份量表
            </h1>
          </section>

          {/* 導引音檔卡片 */}
          <div className="bg-card rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="text-3xl">🎧</div>
              <div>
                <h2 className="text-2xl font-bold mb-2">導引音檔</h2>
                <p className="text-foreground/80 text-lg">
                  10-13 分鐘身心學導引。讓呼吸變長、身體安定、神經回到協奏。
                </p>
              </div>
            </div>

            {/* 音頻播放器 */}
            <div className="bg-secondary/30 rounded-xl p-6 mb-6">
              <audio ref={audioRef} src="/audio/guide-13min.mp3" />

              {/* 播放進度條 */}
              <div className="mb-4">
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-primary transition-all"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-foreground/60">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* 播放按鈕 */}
              <button
                onClick={togglePlay}
                className="w-full bg-foreground text-background py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {isPlaying ? "⏸" : "▶"} {isPlaying ? "暫停" : "立即播放"}
              </button>
            </div>

            {/* 說明書按鈕 */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link
                href="/guide/manual-simple"
                className="bg-card border-2 border-foreground text-foreground py-3 rounded-lg font-semibold text-center hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2"
              >
                📄 精簡版說明書
              </Link>
              <Link
                href="/guide/manual-full"
                className="bg-card border-2 border-foreground text-foreground py-3 rounded-lg font-semibold text-center hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2"
              >
                📋 完整版說明書
              </Link>
            </div>

            {/* 建議文字 */}
            <p className="text-center text-foreground/70 text-sm">
              建議每日 1 回，連續 2-4 週最有感；不適時，隨時可以停。
            </p>
          </div>

          {/* MAIA-2 評估區塊 */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
            <div className="flex items-start gap-3 mb-6 justify-center">
              <div className="text-3xl">📝</div>
              <div>
                <h2 className="text-2xl font-bold mb-2">MAIA-2 內感受量表</h2>
              </div>
            </div>
            <p className="text-foreground/80 mb-6">
              一份描繪「我與身體關係」的 8 個面向量表。完成即可看到雷達圖與分項平均，幫助你看見自己的變化。
            </p>

            <Link
              href="/quiz"
              className="inline-block bg-foreground text-background px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              📊 開始測驗
            </Link>

            <div className="mt-6">
              <Link
                href="/guide/manual-simple"
                className="text-foreground/70 hover:text-foreground underline"
              >
                量表說明書（簡要）
              </Link>
              <span className="mx-2 text-foreground/40">|</span>
              <Link
                href="/guide/manual-full"
                className="text-foreground/70 hover:text-foreground underline"
              >
                量表說明書（完整）
              </Link>
            </div>

            <p className="mt-6 text-sm text-foreground/60">
              建議第一次作為基線，4-8 週後再重測。本階段不留存資料，結果只在你的裝置顯示。
            </p>
          </div>

          {/* 購書連結 */}
          <div className="mt-12 bg-card rounded-2xl p-8 text-center">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">購書連結</h3>
            <p className="text-lg mb-6">
              《你不是破碎，而是入口》——在文字裡點燈，在身體裡安住。
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://www.books.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                博客來
              </a>
              <a
                href="https://www.eslite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                誠品
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 頁尾 */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-foreground/60">
            <p>&copy; 2024 《你不是破碎，而是入口》. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
