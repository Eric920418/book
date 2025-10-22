# 音頻檔案說明

## ⚠️ 重要：音頻檔案未包含在專案中

本專案需要 **13 分鐘身心學導引音檔**，但由於版權和檔案大小原因，音頻檔案未包含在 Git 儲存庫中。

## 如何添加音頻檔案

### 步驟 1：準備音頻檔案

確保你有 13 分鐘身心學導引音檔（MP3 格式）。

### 步驟 2：命名檔案

將音頻檔案重命名為：
```
guide-13min.mp3
```

### 步驟 3：放置檔案

將檔案複製到此目錄：
```bash
cp /path/to/your-audio.mp3 public/audio/guide-13min.mp3
```

### 步驟 4：驗證

啟動開發伺服器並前往 `/guide` 頁面，測試音頻播放器。

---

## 建議音頻規格

### 格式要求
- **檔案格式**：MP3（必須）
- **檔案名稱**：`guide-13min.mp3`（必須完全一致）
- **長度**：10-15 分鐘（建議 13 分鐘）

### 品質建議
- **比特率**：128 kbps（標準）或 192 kbps（高品質）
- **採樣率**：44.1 kHz 或 48 kHz
- **聲道**：單聲道（語音）或立體聲（含背景音樂）
- **檔案大小**：
  - 128 kbps：約 12 MB（13 分鐘）
  - 192 kbps：約 18 MB（13 分鐘）

### 內容建議
導引內容應包含：
- **Somatics**（身體感知練習）
- **Polyvagal Theory**（多重迷走神經理論）
- **Somatic Experiencing**（身體經驗創傷療癒）

---

## 沒有音頻檔案的情況

### 現況
- ✅ 播放器 UI 會正常顯示
- ❌ 點擊播放會顯示 404 錯誤
- ✅ 不會影響其他功能（測驗、雷達圖等）

### 臨時解決方案

#### 方法 1：使用測試音頻
使用任何 MP3 檔案作為測試（建議接近 13 分鐘）：
```bash
# 下載免費測試音頻（靜音或白噪音）
# 或使用任何現有的 MP3 檔案
cp ~/Music/any-song.mp3 public/audio/guide-13min.mp3
```

#### 方法 2：隱藏音頻播放器（進階）
如果暫時不需要音頻功能，可編輯 `app/guide/page.tsx` 隱藏播放器區塊。

---

## 音頻製作建議

### 錄製設備
- **麥克風**：建議使用 USB 麥克風或專業錄音設備
- **環境**：安靜的錄音空間，減少背景噪音
- **軟體**：Audacity（免費）、GarageBand（Mac）、Adobe Audition

### 後製處理
1. **降噪**：移除背景雜音
2. **標準化音量**：確保音量一致
3. **淡入淡出**：開始和結束加入淡入淡出效果
4. **匯出設定**：MP3, 128-192 kbps, 44.1 kHz

### 音頻壓縮工具
- **Audacity**：https://www.audacityteam.org（免費）
- **FFmpeg**：`ffmpeg -i input.wav -b:a 128k output.mp3`

---

## 免費音頻資源（僅供測試）

如需臨時測試音頻，可使用：
- **Freesound**：https://freesound.org（需註冊）
- **YouTube Audio Library**：https://www.youtube.com/audiolibrary
- **生成靜音 MP3**：使用 FFmpeg
  ```bash
  ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 780 -q:a 9 -acodec libmp3lame silence.mp3
  ```

⚠️ **版權提醒**：正式使用時必須使用你有權使用的音頻內容。

---

## 常見問題

### Q: 音頻播放器不顯示怎麼辦？
A: 檢查瀏覽器控制台（F12）是否有錯誤訊息，並確認檔案路徑正確。

### Q: 音頻無法播放？
A: 確認：
1. 檔案名稱完全正確：`guide-13min.mp3`
2. 檔案在正確位置：`public/audio/guide-13min.mp3`
3. 檔案格式是 MP3（不是 M4A、WAV 或其他格式）
4. 瀏覽器支援 MP3 格式

### Q: 可以使用其他格式（如 M4A）嗎？
A: 可以，但需要修改程式碼中的檔案路徑。建議使用 MP3 以獲得最佳瀏覽器相容性。

### Q: 音頻檔案應該加入 Git 版本控制嗎？
A: 不建議。音頻檔案較大（10-20 MB），會增加儲存庫大小。建議：
- 將 `*.mp3` 加入 `.gitignore`
- 使用雲端儲存（Google Drive、Dropbox）分享
- 或使用 Git LFS（Large File Storage）

---

## 部署注意事項

### Vercel / Netlify
- 音頻檔案會自動部署（在 `public/` 目錄中）
- 確認檔案大小 < 50 MB（大多數平台限制）
- 考慮使用 CDN 託管大型音頻檔案

### 使用外部 CDN（進階）
如果音頻檔案過大，可託管在外部服務：
1. 上傳到 Cloudinary、AWS S3 等
2. 修改 `app/guide/page.tsx` 中的 audio src
```typescript
<audio ref={audioRef} src="https://your-cdn.com/guide-13min.mp3" />
```

---

**提示**：如有任何問題，請參考 `/docs/` 目錄中的其他文檔。
