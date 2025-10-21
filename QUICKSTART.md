# 快速啟動指南

## 🚀 5分鐘快速啟動

### 1. 安裝 PostgreSQL

如果還沒有安裝 PostgreSQL，請先安裝：

**macOS (使用 Homebrew):**
```bash
brew install postgresql
brew services start postgresql
```

**Windows/Linux:**
請從 [PostgreSQL 官網](https://www.postgresql.org/download/) 下載安裝

### 2. 創建資料庫

```bash
createdb book_showcase
```

### 3. 設定環境變數

創建 `.env` 檔案：
```bash
cat > .env << EOL
DATABASE_URL="postgresql://localhost:5432/book_showcase"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="development-secret-key"
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@bookshowcase.com"
JWT_SECRET="development-jwt-secret"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
EOL
```

### 4. 一鍵設定專案

```bash
# 安裝依賴
npm install

# 設定資料庫和測試資料
npm run db:setup

# 啟動開發伺服器
npm run dev
```

### 5. 開始使用

- 🌐 前台網站：http://localhost:3000
- 👤 後台管理：http://localhost:3000/admin
  - 帳號：admin@example.com
  - 密碼：admin123

## 📝 測試流程

1. **瀏覽首頁**
   - 查看書籍介紹
   - 播放音頻（需要先放置音頻檔案）

2. **進行測驗**
   - 點擊「開始測驗」
   - 回答 5 個問題
   - 填寫 Email（測試時可用假的）
   - 查看測驗結果

3. **管理後台**
   - 登入後台
   - 查看測驗統計圖表
   - 瀏覽測驗結果列表

## 🛠️ 常見問題

### Q: 資料庫連線失敗？
A: 確認 PostgreSQL 是否正在執行，並檢查 `.env` 中的資料庫連線字串

### Q: 郵件發送失敗？
A: 開發環境可以忽略，生產環境需要設定正確的 SMTP 資訊

### Q: 圖片/音頻無法顯示？
A: 請在 public 目錄下放置對應的檔案，或使用佔位圖片

## 📦 部署到生產環境

1. **Vercel 部署（推薦）**
   ```bash
   npx vercel
   ```

2. **設定環境變數**
   在 Vercel 後台設定所有 `.env` 中的變數

3. **使用雲端資料庫**
   - [Supabase](https://supabase.com/)
   - [Neon](https://neon.tech/)
   - [PlanetScale](https://planetscale.com/)

## 💡 開發提示

- 使用 `npm run db:studio` 開啟資料庫 GUI
- 修改測驗題目請編輯 `scripts/init-db.ts`
- 樣式調整請修改 `app/globals.css`

---

遇到問題？請查看完整的 [README.md](./README.md) 文件。
