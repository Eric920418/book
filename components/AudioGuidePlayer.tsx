'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function AudioGuidePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // 音檔路徑
  const audioSrc = '/audio/guide.mp3'

  // 更新進度
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      // 如果 duration 還沒設置，在播放時也嘗試獲取
      if (duration === 0 && audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration)
      }
    }

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        console.log('音頻總時長:', audio.duration, '秒')
        setDuration(audio.duration)
      }
    }

    const handleEnded = () => setIsPlaying(false)

    const handleError = (e: Event) => {
      console.error('音檔載入錯誤:', e)
      setError('音檔載入失敗，請檢查音檔是否存在')
    }

    // 監聽多個事件以確保能獲取時長
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('loadeddata', updateDuration)
    audio.addEventListener('canplay', updateDuration)
    audio.addEventListener('durationchange', updateDuration)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    // 如果音頻已經載入，立即嘗試獲取時長
    if (audio.readyState >= 1) {
      updateDuration()
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('loadeddata', updateDuration)
      audio.removeEventListener('canplay', updateDuration)
      audio.removeEventListener('durationchange', updateDuration)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [duration])

  // 播放/暫停
  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
        setError(null)

        // 播放開始後再次嘗試獲取時長（針對大文件）
        setTimeout(() => {
          if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
            setDuration(audio.duration)
            console.log('播放時獲取時長:', audio.duration, '秒')
          }
        }, 100)
      }
    } catch (err) {
      console.error('播放錯誤:', err)
      setError('播放失敗，請重試')
      setIsPlaying(false)
    }
  }

  // 調整進度
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  // 快退
  const handleRewind = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, audio.currentTime - 10)
  }

  // 快進
  const handleForward = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.min(duration, audio.currentTime + 10)
  }

  // 重新開始
  const handleRestart = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
  }

  // 格式化時間
  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // 計算進度百分比
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <section id="audio-guide" className="py-8 md:py-20 px-4 md:px-8 relative z-10 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#F9F9F9] rounded-xl md:rounded-3xl p-5 md:p-12 shadow-sm">
          {/* 標題 */}
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <svg className="w-7 h-7 md:w-10 md:h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">導引音檔</h2>
          </div>

          {/* 隱藏的音頻元素 */}
          <audio ref={audioRef} src={audioSrc} preload="metadata" />

          {/* 錯誤提示 */}
          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">錯誤：</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {/* 音頻播放器界面 */}
          <div className="mb-6 md:mb-8">
            {/* 時間顯示 */}
            <div className="flex justify-between text-gray-600 mb-2 md:mb-3">
              <span className="text-sm md:text-lg">{formatTime(currentTime)}</span>
              <span className="text-sm md:text-lg">{formatTime(duration)}</span>
            </div>

            {/* 進度條 */}
            <div className="relative h-1.5 md:h-2 bg-gray-300 rounded-full mb-6 md:mb-8 cursor-pointer">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute h-1.5 md:h-2 bg-[#58595B] rounded-full pointer-events-none"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute h-4 w-4 md:h-5 md:w-5 bg-gray-400 rounded-full top-1/2 -translate-y-1/2 shadow-md pointer-events-none"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            </div>

            {/* 播放控制按鈕 */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              {/* 重新開始 */}
              <button
                onClick={handleRestart}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="重新開始"
              >
                <svg className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                </svg>
              </button>

              {/* 快退10秒 */}
              <button
                onClick={handleRewind}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="快退10秒"
              >
                <svg className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>

              {/* 暫停/播放 */}
              <button
                onClick={togglePlay}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                title={isPlaying ? "暫停" : "播放"}
              >
                {isPlaying ? (
                  <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              {/* 快進10秒 */}
              <button
                onClick={handleForward}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="快進10秒"
              >
                <svg className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>

              {/* 音量圖標（僅顯示） */}
              <button className="text-gray-600 hover:text-gray-900 transition-colors" title="音量">
                <svg className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>
            </div>

            {/* 說明文字 */}
            <div className="text-center space-y-2 md:space-y-3 mb-5 md:mb-8">
              <p className="text-sm md:text-lg text-gray-700">10 - 17分鐘身心學導引。</p>
              <p className="text-xs md:text-base text-gray-600">讓呼吸變長、身體安定；神經回到節奏。</p>
            </div>

            {/* 灰色提示框 */}
            <div className="bg-[#B6B6B6] rounded-lg md:rounded-xl p-3 md:p-4 mb-5 md:mb-8 text-white text-xs md:text-sm flex items-start md:items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 md:mt-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
              </svg>
              <span>請戴上耳機，在一個安靜的空間裡，讓呼吸帶你回家。</span>
            </div>

            {/* 開始按鈕 */}
            <button
              onClick={togglePlay}
              className="block w-full bg-black text-white text-center py-3 md:py-4 rounded-lg md:rounded-xl hover:bg-gray-800 transition-all font-medium text-base md:text-lg mb-4 md:mb-6"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>{isPlaying ? '暫停導引' : '開始17分鐘導引'}</span>
              </div>
            </button>

            {/* 說明書按鈕 */}
            <div className="flex gap-3 md:gap-4">
              <Link
                href="/manual-simple"
                className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 border-2 border-gray-900 text-gray-900 py-2.5 md:py-3 rounded-lg md:rounded-xl hover:bg-gray-50 transition-all font-medium text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                </svg>
                <span>精簡版說明書</span>
              </Link>
              <Link
                href="/manual-full"
                className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 border-2 border-gray-900 text-gray-900 py-2.5 md:py-3 rounded-lg md:rounded-xl hover:bg-gray-50 transition-all font-medium text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                </svg>
                <span>完整版說明書</span>
              </Link>
            </div>
          </div>

          {/* 底部建議文字 */}
          <p className="text-center text-gray-600 text-xs md:text-sm mt-5 md:mt-8">
            建議每日一回，連續2-4周最有感；不適時，隨時可以停。
          </p>
        </div>
      </div>
    </section>
  )
}
