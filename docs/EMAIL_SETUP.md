# 郵件功能設定指南

## 概述

本專案的郵件功能是**選填**的。當用戶完成 MAIA-2 測驗並填寫 email 時，系統會自動發送包含 8 個覺察面向分數的精美郵件。

**如果不配置郵件功能**：
- ✅ 測驗結果仍會存入 localStorage
- ✅ 測驗結果仍會儲存到資料庫
- ✅ 用戶仍可查看完整雷達圖
- ❌ 不會發送郵件通知

## 方法一：使用 Resend（推薦）

### 為什麼推薦 Resend？
- 🚀 設定簡單，5 分鐘完成
- 💰 免費額度：每月 3,000 封
- 📧 高送達率
- 🔧 專為開發者設計

### 設定步驟

1. **註冊 Resend 帳號**
   - 前往 https://resend.com
   - 使用 GitHub 或 Email 註冊

2. **獲取 API Key**
   ```bash
   # 登入後前往：Settings > API Keys > Create API Key
   # 複製 API Key（格式：re_xxxxxxxxxxxx）
   ```

3. **配置環境變數**

   編輯 `.env` 檔案：
   ```env
   EMAIL_SERVER_HOST="smtp.resend.com"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="resend"
   EMAIL_SERVER_PASSWORD="re_xxxxxxxxxxxx"  # 你的 API Key
   EMAIL_FROM="noreply@yourdomain.com"      # 你的寄件者 email
   ```

4. **驗證網域（選填但推薦）**
   - 如有自己的網域，可在 Resend 驗證網域
   - 未驗證前可使用 `onboarding@resend.dev` 測試

5. **測試發送**
   ```bash
   # 重啟開發伺服器
   pnpm dev

   # 完成一次測驗，檢查是否收到郵件
   ```

---

## 方法二：使用 Gmail

### 注意事項
⚠️ Gmail 有每日發送限制（約 500 封/天）
⚠️ 需要啟用「兩步驟驗證」並生成「應用程式專用密碼」

### 設定步驟

1. **啟用兩步驟驗證**
   - 前往 https://myaccount.google.com/security
   - 啟用「兩步驟驗證」

2. **生成應用程式專用密碼**
   - 前往 https://myaccount.google.com/apppasswords
   - 選擇「郵件」和「其他裝置」
   - 生成密碼（16 位數，無空格）

3. **配置環境變數**

   編輯 `.env` 檔案：
   ```env
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="abcd efgh ijkl mnop"  # 應用程式專用密碼
   EMAIL_FROM="your-email@gmail.com"
   ```

4. **測試發送**
   ```bash
   pnpm dev
   ```

---

## 方法三：使用 SendGrid

### 設定步驟

1. **註冊 SendGrid**
   - 前往 https://sendgrid.com
   - 免費額度：每月 100 封

2. **獲取 API Key**
   - Settings > API Keys > Create API Key
   - 權限選擇：Full Access 或 Mail Send

3. **配置環境變數**
   ```env
   EMAIL_SERVER_HOST="smtp.sendgrid.net"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="apikey"
   EMAIL_SERVER_PASSWORD="SG.xxxxxxxxxxxx"
   EMAIL_FROM="noreply@yourdomain.com"
   ```

---

## 郵件內容預覽

發送的郵件包含：
- ✅ 8 個覺察面向的分數表格
- ✅ 結果解讀說明
- ✅ 查看完整雷達圖的連結
- ✅ 導引音頻和購書連結

### 郵件樣板位置
`app/api/quiz/submit/route.ts` 中的 `generateMaia2EmailHtml()` 函數

---

## 測試郵件功能

### 1. 檢查配置狀態
```bash
# 檢查環境變數是否正確載入
pnpm dev

# 查看終端輸出：
# ✅ "郵件已發送至: user@example.com"
# ℹ️ "郵件功能未配置，跳過發送"
```

### 2. 完整測試流程
1. 前往 `http://localhost:3000/quiz`
2. 完成 MAIA-2 測驗（37 題）
3. 填寫有效的 email
4. 檢查收件匣（和垃圾郵件）

### 3. 故障排除

**問題：沒收到郵件**
```bash
# 1. 檢查終端日誌
# 2. 確認環境變數正確設定
# 3. 檢查垃圾郵件匣
# 4. 驗證 SMTP 帳號是否有效
```

**問題：SMTP 驗證失敗**
```bash
# Gmail: 確認已啟用「兩步驟驗證」並使用「應用程式專用密碼」
# Resend: 確認 API Key 格式正確（re_xxxx）
```

---

## 常見問題

### Q: 郵件功能是必須的嗎？
A: **不是**。測驗結果會存在 localStorage 和資料庫，用戶可直接在網站查看。

### Q: 如何關閉郵件功能？
A: 不配置環境變數即可。系統會自動檢測並跳過郵件發送。

### Q: 可以自訂郵件樣板嗎？
A: 可以。編輯 `app/api/quiz/submit/route.ts:34-134` 的 HTML 模板。

### Q: 如何限制每日發送量？
A: 在 API 路由中加入 rate limiting 邏輯（建議使用 Redis）。

---

## 進階：自訂郵件內容

編輯 `app/api/quiz/submit/route.ts`：

```typescript
function generateMaia2EmailHtml(
  dimensionScores: Record<string, number>,
  siteUrl: string,
  resultId: string
): string {
  // 修改這裡的 HTML 模板
  return `
    <!DOCTYPE html>
    <html>
    ...
  `
}
```

---

## 安全性建議

1. ✅ **不要將 `.env` 提交到 Git**
   ```bash
   # 確認 .gitignore 包含：
   .env
   .env.local
   ```

2. ✅ **使用強密碼**
   - JWT_SECRET 至少 32 字元
   - 生產環境使用隨機密鑰

3. ✅ **保護 SMTP 憑證**
   - 使用環境變數
   - 不要在程式碼中硬編碼

4. ✅ **限制發送頻率**
   - 考慮加入 rate limiting
   - 防止郵件轟炸

---

## 部署到正式環境

### Vercel 部署
1. 前往 Vercel 專案設定
2. Environment Variables
3. 加入所有 EMAIL_* 變數
4. 重新部署

### 其他平台
參考各平台的環境變數設定方式。

---

## 需要幫助？

- 📧 Resend 文檔：https://resend.com/docs
- 📧 Nodemailer 文檔：https://nodemailer.com
- 📧 Gmail SMTP：https://support.google.com/mail/answer/7126229
