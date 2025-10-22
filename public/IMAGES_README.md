# 圖片資源說明

## 當前狀態

本專案使用 **SVG 佔位符圖片**，方便開發和測試。

## 佔位符圖片

### 1. 書籍封面
- **檔案**：`/public/book-cover.svg`
- **尺寸**：400 × 600 px
- **用途**：首頁、導引頁面
- **替換**：將實際封面圖片命名為 `book-cover.jpg` 或 `book-cover.png` 並放在 `/public/` 目錄

### 2. 作者照片
- **檔案**：`/public/author-photo.svg`
- **尺寸**：300 × 300 px
- **用途**：首頁作者介紹
- **替換**：將實際照片命名為 `author-photo.jpg` 或 `author-photo.png` 並放在 `/public/` 目錄

## 如何替換為實際圖片

### 方法 1：直接替換檔案

```bash
# 1. 將你的封面圖片重命名為：
book-cover.jpg   # 或 .png

# 2. 將你的作者照片重命名為：
author-photo.jpg  # 或 .png

# 3. 複製到 public/ 目錄
cp ~/Desktop/my-book-cover.jpg public/book-cover.jpg
cp ~/Desktop/my-author-photo.jpg public/author-photo.jpg

# 4. 更新程式碼中的圖片路徑（app/page.tsx）
coverImage: "/book-cover.jpg"  # 改為 .jpg
photo: "/author-photo.jpg"      # 改為 .jpg
```

### 方法 2：使用不同檔名

如果你想保留自己的檔名：

1. 將圖片放入 `/public/` 目錄
2. 編輯 `app/page.tsx` 中的圖片路徑：

```typescript
const bookData = {
  coverImage: "/your-custom-cover.jpg",  // 改為你的檔名
  // ...
}

const authorData = {
  photo: "/your-author-photo.jpg",  // 改為你的檔名
  // ...
}
```

## 建議圖片規格

### 書籍封面
- **格式**：JPG, PNG, WebP
- **尺寸**：至少 400 × 600 px（建議 800 × 1200 px）
- **比例**：2:3（直式書籍標準）
- **檔案大小**：< 500 KB

### 作者照片
- **格式**：JPG, PNG, WebP
- **尺寸**：至少 300 × 300 px（建議 600 × 600 px）
- **比例**：1:1（正方形）
- **檔案大小**：< 200 KB

## 圖片優化建議

### 使用 Next.js Image 組件

Next.js 的 `<Image>` 組件會自動優化圖片：

```typescript
import Image from "next/image"

<Image
  src="/book-cover.jpg"
  alt="書籍封面"
  width={400}
  height={600}
  priority  // 首頁圖片優先載入
/>
```

### 線上圖片壓縮工具

- **TinyPNG**：https://tinypng.com
- **Squoosh**：https://squoosh.app
- **ImageOptim**（Mac）：https://imageoptim.com

## 常見問題

### Q: SVG 佔位符夠用嗎？
A: 對於開發和展示功能，SVG 佔位符完全足夠。但正式上線前建議使用實際圖片。

### Q: 可以使用 URL 圖片嗎？
A: 可以，直接在 `coverImage` 和 `photo` 欄位填入完整 URL：
```typescript
coverImage: "https://example.com/cover.jpg"
```

### Q: 需要什麼圖片授權？
A: 確保你有權使用這些圖片。如使用免費圖庫，請遵守授權條款。

## 免費圖庫資源（如需臨時佔位）

- **Unsplash**：https://unsplash.com（高品質免費圖片）
- **Pexels**：https://pexels.com
- **Pixabay**：https://pixabay.com

---

**提示**：如果圖片不顯示，檢查：
1. 檔案是否在 `/public/` 目錄
2. 檔名是否正確（包括副檔名）
3. 瀏覽器快取（Ctrl+F5 強制重新整理）
