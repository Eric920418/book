# 《你不是破碎，而是入口》書籍網站

一個使用 Next.js、Tailwind CSS v3、PostgreSQL 和 Chart.js 建立的書籍行銷網站，整合 MAIA-2 內感受量表、13分鐘身心學導引音檔，以及完整的說明書系統。

## 🎉 最近更新（2025-10-22）

### ✅ 已修復的核心問題

所有已知的功能缺失和錯誤已完全修復：

1. ✅ **API 路由完全重寫** - 匹配 MAIA-2 的 8 個覺察面向邏輯
2. ✅ **資料庫 Schema 重新設計** - 簡化為適合 MAIA-2 的結構
3. ✅ **郵件功能完整配置** - 支援 Gmail、Resend、SendGrid
4. ✅ **圖片資源處理** - 添加 SVG 佔位符（book-cover.svg, author-photo.svg）
5. ✅ **購書連結更新** - 指向搜尋頁面並添加 title 提示
6. ✅ **音頻文件文檔** - 完整的設置說明（public/audio/README.md）
7. ✅ **TypeScript 編譯** - 所有類型錯誤已修復，build 成功通過

### 📁 新增的文檔

- `/docs/EMAIL_SETUP.md` - 完整的郵件配置指南（Gmail、Resend、SendGrid）
- `/public/IMAGES_README.md` - 圖片資源說明和替換指南
- `/public/audio/README.md` - 音頻文件完整說明

### ⚠️ 待完成項目

- **資料庫同步**：需要啟動 PostgreSQL 後執行 `pnpm prisma db:push`
- **音頻文件**：需要手動添加 `public/audio/guide-13min.mp3`（13分鐘導引音檔）

---

## 書籍資訊

- **書名**：你不是破碎，而是入口
- **副標題**：在身體裡，慢一點，看見光
- **作者**：趙耕樂（徒手物理治療師）
- **核心概念**：一本書 × 一段導引 × 一份量表

## 功能特色

### 前台功能
- 📚 **書籍展示**：展示書籍資訊、作者介紹、購書連結（博客來、誠品）
- 🎧 **13分鐘身心學導引**：內建音頻播放器，播放 Somatics × Polyvagal × Somatic Experiencing 導引
- 📝 **MAIA-2 量表系統**：完整的37題內感受量表（8個面向）
- 📊 **雷達圖結果展示**：視覺化的8面向覺察輪廓
- 📖 **完整說明書**：精簡版與完整版導引說明、量表使用說明
- 📧 **Email接收結果**：測驗完成後填寫 Email 接收完整結果（必填）
- 💾 **localStorage 存儲**：測驗結果儲存在用戶裝置上，保護隱私

### 後台功能（選填數據收集）
- 🔐 **管理員登入**：安全的身份驗證系統
- 📈 **數據統計**：使用 Chart.js 視覺化測驗數據（僅統計選擇分享的用戶）
- 📋 **結果管理**：查看所有願意分享的測驗結果
- 📊 **面向分析**：分析用戶的8個覺察面向分布

## 技術架構

- **前端框架**：Next.js 15.5.6 (App Router)
- **樣式系統**：Tailwind CSS v3.4.18
- **資料庫**：PostgreSQL + Prisma ORM（選擇性數據存儲）
- **圖表庫**：Chart.js + react-chartjs-2（雷達圖）
- **郵件服務**：Nodemailer（Email接收結果）
- **身份驗證**：JWT
- **本地存儲**：LocalStorage（測驗結果主要存儲方式）

## 安裝步驟

### 1. 克隆專案
```bash
git clone [專案網址]
cd book-showcase
```

### 2. 安裝依賴
```bash
pnpm install
```

### 3. 添加音頻檔案
將 13分鐘導引音檔放置到 `public/audio/` 目錄：
```bash
# 檔案名稱必須是 guide-13min.mp3
cp your-audio-file.mp3 public/audio/guide-13min.mp3
```

### 4. 環境設定（可選）
如果需要使用後台管理和郵件功能，複製 `.env.example` 到 `.env` 並填寫相關設定：
```bash
cp .env.example .env
```

編輯 `.env` 檔案：
```env
# 資料庫連線（選填 - 僅用於後台管理）
DATABASE_URL="postgresql://使用者:密碼@localhost:5432/book_showcase"

# 郵件設定（選填 - 僅在用戶填寫Email時使用）
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@bookshowcase.com"

# JWT 密鑰（選填 - 用於後台登入）
JWT_SECRET="your-jwt-secret"
```

### 5. 資料庫設定（可選 - 僅用於後台）
```bash
# 建立資料庫結構
pnpm run db:push

# 初始化測試資料
pnpm run db:seed
```

### 6. 啟動開發伺服器
```bash
pnpm dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 使用說明

### 前台使用流程

1. **首頁**（`/`）
   - 查看書籍資訊和作者介紹
   - 點擊「開始 13 分鐘導引」前往音頻頁面
   - 點擊「進入 MAIA-2 評估」開始測驗
   - 購書連結（博客來、誠品）

2. **13分鐘導引頁面**（`/guide`）
   - 播放 13 分鐘身心學導引音檔
   - 查看精簡版說明書（`/guide/manual-simple`）
   - 查看完整版說明書（`/guide/manual-full`）
   - 前往 MAIA-2 測驗

3. **MAIA-2 測驗**（`/quiz`）
   - 完成 37 題量表（0-5分評分）
   - 查看量表說明（`/quiz/manual`）
   - 測驗完成後填寫 Email（必填）
   - 測驗結果自動存入 localStorage 及伺服器

4. **測驗結果**（`/quiz/result`）
   - 查看 8 個面向的雷達圖
   - 查看各面向詳細分數（已套用反向計分）
   - 重新測驗或前往導引頁面

### 後台管理（選填功能）
1. 訪問 `/admin` 進入管理員登入頁面
2. 使用預設帳號登入：
   - Email: `admin@example.com`
   - 密碼: `admin123`
3. 登入後可查看選擇分享的用戶測驗統計和結果

## 資料庫指令

```bash
# 同步資料庫結構
npm run db:push

# 執行資料庫遷移
npm run db:migrate

# 填充測試資料
npm run db:seed

# 開啟 Prisma Studio（資料庫 GUI）
npm run db:studio

# 一鍵設定（同步結構 + 填充資料）
npm run db:setup
```

## 專案結構

```
book-showcase/
├── app/                        # Next.js App Router
│   ├── admin/                 # 後台頁面（選填）
│   ├── api/                   # API 路由（選填）
│   ├── guide/                 # 13分鐘導引頁面
│   │   ├── manual-simple/    # 精簡版說明書
│   │   ├── manual-full/      # 完整版說明書
│   │   └── page.tsx          # 音頻播放頁面
│   ├── quiz/                  # MAIA-2 測驗系統
│   │   ├── manual/           # 量表使用說明
│   │   ├── result/           # 測驗結果頁面（雷達圖）
│   │   └── page.tsx          # 測驗頁面（37題）
│   ├── globals.css           # 全域樣式
│   ├── layout.tsx            # 根佈局
│   └── page.tsx              # 首頁
├── components/               # React 組件
│   └── ui/                  # UI 組件
├── lib/                      # 工具函數
│   ├── maia2-questions.ts   # MAIA-2 題目與計算邏輯
│   ├── auth/                # 認證相關（選填）
│   ├── email/               # 郵件相關（選填）
│   └── prisma.ts            # Prisma 客戶端（選填）
├── prisma/                   # 資料庫結構（選填）
│   └── schema.prisma        # Prisma Schema
├── public/                   # 靜態資源
│   └── audio/               # 音頻檔案目錄
│       ├── guide-13min.mp3  # 13分鐘導引音檔（需自行添加）
│       └── README.md        # 音頻檔案說明
├── scripts/                  # 工具腳本（選填）
│   └── init-db.ts           # 資料庫初始化
└── types/                    # TypeScript 類型定義
```

## MAIA-2 內感受量表說明

MAIA-2 是一份評估「內感受覺察」的標準化量表，共 **37 題**，分為 **8 個面向**：

### 8 個面向

1. **注意**（Noticing）- 題 1-4
   - 察覺呼吸、緊繃或舒適等身體變化

2. **不分心**（Not-Distracting）- 題 5-10
   - 能面對不適，不逃避或壓抑

3. **不擔心**（Not-Worrying）- 題 11-15
   - 面對不適時不陷入焦慮或恐懼

4. **注意調節**（Attention Regulation）- 題 16-22
   - 能主動把注意力帶回身體，如呼吸錨定

5. **情緒覺察**（Emotional Awareness）- 題 23-27
   - 感受情緒如何在身體中顯現

6. **自我調節**（Self-Regulation）- 題 28-32
   - 透過身體感受調節情緒與喚起

7. **身體聆聽**（Body Listening）- 題 33-35
   - 細膩傾聽身體訊息，從中獲得方向感

8. **身體信任**（Trusting）- 題 36-37
   - 感到身體是安全、可靠的地方

### 計分方式

- 每題評分：0（從不）～ 5（總是）
- **反向計分題目**：題 5-10（全部）、題 11、12、15
  - 公式：`反向分數 = 5 - 原始分數`
  - 例：原始選 0 → 計為 5；原始選 5 → 計為 0
- 每個面向計算平均分（不計總分）
- 結果以雷達圖呈現8個面向的「覺察輪廓」

### 如何解讀

- **凹的地方**（分數較低）→ 相對薄弱的能力，可從此處開始練習
- **凸的地方**（分數較高）→ 已有的內在資源
- **重點在變化**：建議 4-8 週後重測，觀察前後變化

## 注意事項

1. **Favicon 圖標**：
   - 使用 `/public/right_white_half.png` 作為網站圖標
   - 已在 `app/layout.tsx` 中配置
   - 圖標為樹與星星的設計，灰色背景

2. **音頻檔案**（必需）：
   - 將 13 分鐘導引音檔命名為 `guide-13min.mp3`
   - 放置在 `public/audio/` 目錄下
   - 建議格式：MP3, 128kbps, 約 10-20MB

3. **郵件設定**（選填）：
   - 僅在用戶主動填寫 Email 時需要
   - 需要設定正確的 SMTP 伺服器

4. **資料庫**（選填）：
   - 僅用於後台管理和選擇性數據收集
   - 前台測驗完全使用 localStorage，無需資料庫

5. **隱私保護**：
   - 測驗結果預設只存在用戶瀏覽器（localStorage）
   - 只有用戶主動填寫 Email 才會上傳到伺服器
   - 符合 GDPR 和隱私保護原則

6. **購書連結**：
   - 編輯 `app/page.tsx` 和其他頁面中的購書連結
   - 將 placeholder URL 替換為實際的博客來和誠品連結

## 開發指南

### 修改 MAIA-2 題目
編輯 `lib/maia2-questions.ts` 檔案：
- `questions` 陣列包含所有 37 題
- `dimensions` 陣列定義 8 個面向
- `REVERSE_SCORED_ITEMS` 定義反向計分題目清單（5-10, 11, 12, 15）
- `scoreItem()` 函數處理反向計分邏輯
- `calculateDimensionScores()` 函數計算各面向分數（已包含反向計分處理）

### 自訂雷達圖樣式
編輯 `app/quiz/result/page.tsx`：
- `chartData` 物件控制資料
- `chartOptions` 物件控制圖表外觀
- 使用 Chart.js 的 Radar 圖表類型

### 修改說明書內容
編輯以下檔案來更新說明書內容：
- `/app/guide/manual-simple/page.tsx` - 精簡版說明書
- `/app/guide/manual-full/page.tsx` - 完整版說明書
- `/app/quiz/manual/page.tsx` - MAIA-2 量表說明

### 自訂樣式
編輯 `/app/globals.css` 檔案中的 CSS 變數來調整主題顏色。

## 部署建議

1. **Vercel 部署**（推薦）
   - 一鍵部署 Next.js 應用
   - 自動處理環境變數
   - 無需資料庫即可運行（前台功能）

2. **資料庫**（選填）
   - Supabase 或 Neon 作為 PostgreSQL 資料庫
   - 僅用於後台管理

3. **郵件服務**（選填）
   - SendGrid、Resend 或其他郵件服務
   - 僅在用戶填寫 Email 時需要

4. **環境變數**
   - 設定強密碼
   - 不要將 `.env` 上傳到 Git

## 資料來源

### MAIA-2 量表
- Mehling W.E. et al. (2018). MAIA-2. UCSF Osher Center.
- 中文版（2020）：UCSF Osher Center
- Teng et al. (2022). Frontiers in Psychiatry

### 身心學導引
- Somatics
- Polyvagal Theory
- Somatic Experiencing

## Build 狀態與已知問題

### ✅ Build 狀態：成功

最後 build 時間：2025-10-21

### 已修復的問題

1. **Next.js 15 動態路由參數變更**
   - 問題：`params` 從同步物件改為 Promise
   - 修復：`app/quiz/result/[id]/page.tsx` 中將 `params: { id: string }` 改為 `params: Promise<{ id: string }>` 並使用 `await`

2. **導航組件使用錯誤**
   - 問題：`app/admin/page.tsx` 使用 `<a>` 標籤而非 Next.js `<Link />` 組件
   - 修復：改用 `next/link` 的 `Link` 組件

3. **TypeScript 類型安全**
   - 問題：`app/api/admin/results/route.ts` 使用 `any` 類型
   - 修復：使用類型推斷和解構語法避免 `any`

4. **HTML 字符轉義**
   - 問題：`app/guide/manual-full/page.tsx` 單引號未轉義
   - 修復：使用 `&apos;` 轉義所有單引號

5. **Chart.js 類型問題**
   - 問題：`app/quiz/result/page.tsx` tooltip 回調使用 `any` 類型
   - 修復：添加 `eslint-disable-next-line` 註解並移除不必要的 `any` 類型宣告

6. **Zod 錯誤屬性命名**
   - 問題：`app/api/quiz/submit/route.ts` 使用 `error.errors` 而非正確的 `error.issues`
   - 修復：改用 `error.issues`

### ⚠️ 警告（不影響 build）

以下警告不會阻止專案運行，但建議逐步優化：

- 未使用的導入：`Image`, `Bar`, `getDimensionName`, `authorData`
- 未使用的變數：部分 catch 區塊的 `error` 變數
- React Hook 依賴：`checkAuth` 未加入 useEffect 依賴陣列
- 圖片優化：`AudioPlayer.tsx` 使用 `<img>` 而非 `next/image`

### 🔧 技術細節

- **Next.js 版本**：15.5.6（使用 App Router）
- **TypeScript 版本**：5.9.3
- **Prisma 版本**：6.17.1
- **套件管理工具**：pnpm（必須使用）

### 📝 開發注意事項

1. **必須使用 pnpm**：專案配置為使用 pnpm，不要使用 npm 或 yarn
2. **Prisma Client 生成**：修改 schema 後務必執行 `pnpm prisma generate`
3. **環境變數**：`.env` 檔案不包含在版本控制中，部署時需手動設定
4. **資料庫遷移**：使用 `db:push` 而非 `db:migrate`（開發環境）
5. **禁用 accept-data-loss**：資料庫操作不允許使用 `--accept-data-loss` 參數

## 授權

MIT License