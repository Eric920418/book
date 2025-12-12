# 《你不是破碎,而是入口》書籍網站

> **一本書 × 一段導引 × 一份量表**
> 使用 Next.js 15、Tailwind CSS v3、PostgreSQL 和 Chart.js 建立的書籍行銷網站

**專案狀態 (2025-11-07)**
✅ 首頁極簡主視覺設計完成
✅ Quiz 頁面響應式修復完成
✅ 精簡版說明書卡片式設計完成 (13分鐘版本)
✅ 完整版說明書介紹頁面設計完成 (17分鐘版本)
✅ 首頁新增輕量級粒子飄動效果 (純 CSS 動畫)
✅ 首頁音頻播放器功能完整實現 (支援播放、暫停、進度條、快進快退)
✅ 音檔已添加：`public/audio/音樂3fix_回到身體MIX.wav` (17分鐘導引)

---

## 📑 目錄

- [書籍資訊](#書籍資訊)
- [功能特色](#功能特色)
- [技術架構](#技術架構)
- [快速開始](#快速開始)
- [使用說明](#使用說明)
- [MAIA-2 量表說明](#maia-2-內感受量表說明)
- [開發指南](#開發指南)
- [專案結構](#專案結構)
- [部署建議](#部署建議)
- [更新日誌](#更新日誌)

---

## 書籍資訊

- **書名**：你不是破碎,而是入口
- **副標題**：在身體裡,慢一點,看見光
- **作者**：趙耕樂 (徒手物理治療師)
- **核心概念**：一本書 × 一段導引 × 一份量表

---

## 功能特色

### 前台功能
- 📚 **書籍展示**：展示書籍資訊、作者介紹、購書連結 (博客來、誠品、讀冊、出版社)
- 🎧 **13分鐘身心學導引**：內建音頻播放器 (Somatics × Polyvagal × Somatic Experiencing)
- 📝 **MAIA-2 量表系統**：完整的 37 題內感受量表 (8 個覺察面向)
- 📊 **雷達圖結果展示**：視覺化的 8 面向覺察輪廓
- 📖 **完整說明書**：精簡版與完整版導引說明、量表使用說明
- 📧 **Email 接收結果**：測驗完成後填寫 Email 接收完整結果 (必填)
- 💾 **localStorage 存儲**：測驗結果儲存在用戶裝置上,保護隱私
- 🔄 **測驗進度緩存**：答題進度自動保存,關閉網頁後可繼續作答

### 後台功能 (選填數據收集)
- 🔐 **管理員登入**：安全的身份驗證系統
- 📈 **數據統計**：使用 Chart.js 視覺化測驗數據 (僅統計選擇分享的用戶)
- 📋 **結果管理**：查看所有願意分享的測驗結果
- 📊 **面向分析**：分析用戶的 8 個覺察面向分布

---

## 技術架構

| 技術 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.0.10 | 前端框架 (App Router + Turbopack) |
| React | 19.2.1 | UI 組件 |
| TypeScript | 5.x | 類型安全 |
| Tailwind CSS | 3.4.18 | 樣式系統 |
| Cloudflare D1 | - | 資料庫 (SQLite 相容) |
| Prisma | 6.17.1 | ORM + D1 Adapter |
| Chart.js | - | 雷達圖 |
| Resend | - | 郵件服務 (Edge 相容) |
| jose | - | JWT (Edge 相容) |
| OpenNext | - | Cloudflare 部署 adapter |
| pnpm | - | 套件管理 (必須) |

**色系設計**：極簡黑白灰
- 純黑 `#000000` / 深灰 `#58595B` / 中灰 `#B6B6B6` / 淺灰 `#D9D9D9` / 極淺灰 `#F9F9F9` / 純白 `#FFFFFF`

---

## 快速開始

### 1. 克隆專案
```bash
git clone [專案網址]
cd book-showcase
```

### 2. 安裝依賴 (必須使用 pnpm)
```bash
pnpm install
```

### 3. 音頻檔案
音檔已包含在專案中：
- `public/audio/音樂3fix_回到身體MIX.wav` (204MB, 17分鐘導引)
- 支援 WAV 格式大文件播放
- 若需更換音檔，請將新音檔放置在 `public/audio/` 並更新 `components/AudioGuidePlayer.tsx` 中的路徑

### 4. 環境設定 (選填 - 用於後台管理)
```bash
cp .env.example .env
```

編輯 `.env` 檔案：
```env
# 資料庫連線 (選填 - 僅用於後台管理)
DATABASE_URL="postgresql://使用者:密碼@localhost:5432/book_showcase"

# 郵件設定 (選填 - 僅在用戶填寫 Email 時使用)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@bookshowcase.com"

# JWT 密鑰 (選填 - 用於後台登入)
JWT_SECRET="your-jwt-secret"
```

### 5. 資料庫設定 (選填 - 僅用於後台)
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

---

## 使用說明

### 前台使用流程

1. **首頁** (`/`)
   - 查看書籍資訊和作者介紹
   - 點擊「開始 17 分鐘導引」前往音頻頁面
   - 點擊「進入 MAIA-2 評估」開始測驗
   - 購書連結 (博客來、誠品、讀冊、出版社)

2. **13分鐘導引頁面** (`/guide`)
   - 播放 13 分鐘身心學導引音檔
   - 查看精簡版說明書 (`/guide/manual-simple`)
   - 查看完整版說明書 (`/guide/manual-full`)
   - 前往 MAIA-2 測驗

3. **MAIA-2 測驗** (`/quiz`)
   - 完成 37 題量表 (0-5 分評分)
   - 查看量表說明 (`/quiz/manual`)
   - **自動保存進度**：每答一題自動緩存,關閉網頁後可恢復
   - 重新開啟時會提示是否繼續上次的測驗
   - 測驗完成後填寫 Email (必填)
   - 測驗結果自動存入 localStorage 及伺服器

4. **測驗結果** (`/quiz/result`)
   - 查看 8 個面向的雷達圖
   - 查看各面向詳細分數 (已套用反向計分)
   - 重新測驗或前往導引頁面

### 後台管理 (選填功能)
1. 訪問 `/admin` 進入管理員登入頁面
2. 使用預設帳號登入：
   - Email: `admin@example.com`
   - 密碼: `admin123`
3. 登入後可查看選擇分享的用戶測驗統計和結果

---

## MAIA-2 內感受量表說明

MAIA-2 是一份評估「內感受覺察」的標準化量表,共 **37 題**,分為 **8 個面向**：

### 8 個覺察面向

| 面向 | 英文 | 題號 | 說明 |
|------|------|------|------|
| **注意** | Noticing | 1-4 | 察覺呼吸、緊繃或舒適等身體變化 |
| **不分心** | Not-Distracting | 5-10 | 能面對不適,不逃避或壓抑 |
| **不擔心** | Not-Worrying | 11-15 | 面對不適時不陷入焦慮或恐懼 |
| **注意調節** | Attention Regulation | 16-22 | 能主動把注意力帶回身體,如呼吸錨定 |
| **情緒覺察** | Emotional Awareness | 23-27 | 感受情緒如何在身體中顯現 |
| **自我調節** | Self-Regulation | 28-32 | 透過身體感受調節情緒與喚起 |
| **身體聆聽** | Body Listening | 33-35 | 細膩傾聽身體訊息,從中獲得方向感 |
| **身體信任** | Trusting | 36-37 | 感到身體是安全、可靠的地方 |

### 計分方式

- 每題評分：**0 (從不) ~ 5 (總是)**
- **反向計分題目**：題 5-10 (全部)、題 11、12、15
  - 公式：`反向分數 = 5 - 原始分數`
  - 例：原始選 0 → 計為 5；原始選 5 → 計為 0
- 每個面向計算平均分 (不計總分)
- 結果以雷達圖呈現 8 個面向的「覺察輪廓」

### 如何解讀

- **凹的地方** (分數較低) → 相對薄弱的能力,可從此處開始練習
- **凸的地方** (分數較高) → 已有的內在資源
- **重點在變化**：建議 4-8 週後重測,觀察前後變化

### 資料來源

- Mehling W.E. et al. (2018). MAIA-2. UCSF Osher Center.
- 中文版 (2020)：UCSF Osher Center
- Teng et al. (2022). Frontiers in Psychiatry

---

## 開發指南

### 修改 MAIA-2 題目
編輯 `lib/maia2-questions.ts` 檔案：
- `questions` 陣列包含所有 37 題
- `dimensions` 陣列定義 8 個面向
- `REVERSE_SCORED_ITEMS` 定義反向計分題目清單 (5-10, 11, 12, 15)
- `scoreItem()` 函數處理反向計分邏輯
- `calculateDimensionScores()` 函數計算各面向分數 (已包含反向計分處理)

### 自訂雷達圖樣式
編輯 `app/quiz/result/page.tsx`：
- `chartData` 物件控制資料
- `chartOptions` 物件控制圖表外觀
- 使用 Chart.js 的 Radar 圖表類型

### 修改說明書內容
編輯以下檔案來更新說明書內容：
- `/app/guide/manual-simple/page.tsx` - 精簡版說明書 (卡片式設計)
- `/app/guide/manual-full/page.tsx` - 完整版說明書
- `/app/quiz/manual/page.tsx` - MAIA-2 量表說明

### 自訂樣式

專案已配置極簡黑白灰色系,色彩變數定義在 `/app/globals.css`：

**色系配置**：
- `#000000` - 純黑 (文字、深色背景)
- `#58595B` - 深灰 (主色調)
- `#B6B6B6` - 中灰 (強調色)
- `#D9D9D9` - 淺灰 (邊框)
- `#F9F9F9` - 極淺灰 (次要背景)
- `#FFFFFF` - 純白 (主背景)

**使用方式**：
```tsx
// 使用語義化變數
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary border-border">

// 使用自訂灰階變數
<div className="bg-gray-darkest text-gray-white">
<div className="bg-gray-lightest text-gray-dark">
```

**可用的顏色類別**：
- `background` / `foreground` - 主背景與文字
- `primary` / `primary-foreground` - 主色調 (深灰 #58595B)
- `secondary` / `secondary-foreground` - 次要色調 (極淺灰 #F9F9F9)
- `accent` / `accent-foreground` - 強調色 (中灰 #B6B6B6)
- `card` / `card-foreground` - 卡片背景與文字
- `border` - 邊框 (淺灰 #D9D9D9)
- `gray-{darkest|dark|medium|light|lightest|white}` - 完整灰階變數

系統已內建淺色/深色模式自動切換,會根據用戶系統設定調整配色。

### 資料庫指令

```bash
# 同步資料庫結構
pnpm run db:push

# 執行資料庫遷移
pnpm run db:migrate

# 填充測試資料
pnpm run db:seed

# 開啟 Prisma Studio (資料庫 GUI)
pnpm run db:studio

# 一鍵設定 (同步結構 + 填充資料)
pnpm run db:setup
```

---

## 專案結構

```
book-showcase/
├── app/                        # Next.js App Router
│   ├── admin/                 # 後台頁面 (選填)
│   ├── api/                   # API 路由 (選填)
│   ├── guide/                 # 13分鐘導引頁面
│   │   ├── manual-simple/    # 精簡版說明書 (卡片式設計)
│   │   ├── manual-full/      # 完整版說明書
│   │   └── page.tsx          # 音頻播放頁面
│   ├── quiz/                  # MAIA-2 測驗系統
│   │   ├── manual/           # 量表使用說明
│   │   ├── result/           # 測驗結果頁面 (雷達圖)
│   │   └── page.tsx          # 測驗頁面 (37 題)
│   ├── globals.css           # 全域樣式 (黑白灰色系)
│   ├── layout.tsx            # 根佈局
│   └── page.tsx              # 首頁 (極簡主視覺設計)
├── components/               # React 組件
│   └── ui/                  # UI 組件
├── lib/                      # 工具函數
│   ├── maia2-questions.ts   # MAIA-2 題目與計算邏輯
│   ├── auth/                # 認證相關 (選填)
│   ├── email/               # 郵件相關 (選填)
│   └── prisma.ts            # Prisma 客戶端 (選填)
├── prisma/                   # 資料庫結構 (選填)
│   └── schema.prisma        # Prisma Schema
├── public/                   # 靜態資源
│   └── audio/               # 音頻檔案目錄
│       └── 音樂3fix_回到身體MIX.wav  # 17分鐘導引音檔 (204MB)
├── scripts/                  # 工具腳本 (選填)
│   └── init-db.ts           # 資料庫初始化
└── types/                    # TypeScript 類型定義
```

---

## 部署建議

### 1. Cloudflare Pages 部署 (推薦)

專案已配置好 Cloudflare 部署，使用 OpenNext adapter + Cloudflare D1 資料庫。

#### 前置準備
1. 安裝 Cloudflare CLI：`pnpm add -g wrangler`
2. 登入 Cloudflare：`wrangler login`

#### 建立 D1 資料庫
```bash
# 建立資料庫
pnpm cf:d1:create

# 記下返回的 database_id，填入 wrangler.toml
```

#### 更新 wrangler.toml
將 `wrangler.toml` 中的 `database_id = ""` 替換為實際的 database_id。

#### 初始化資料庫
```bash
# 本地測試用
pnpm cf:d1:migrate

# 生產環境
pnpm cf:d1:migrate:prod
```

#### 設定環境變數 (Secrets)
```bash
# 使用 wrangler 設定敏感資訊
wrangler secret put JWT_SECRET
wrangler secret put RESEND_API_KEY
wrangler secret put NEXTAUTH_SECRET
```

#### 部署
```bash
# 本地預覽
pnpm cf:preview

# 部署到 Cloudflare
pnpm cf:deploy
```

#### Cloudflare 相關指令
| 指令 | 說明 |
|------|------|
| `pnpm cf:build` | 使用 OpenNext 建置 |
| `pnpm cf:dev` | 本地開發模式 |
| `pnpm cf:preview` | 建置並本地預覽 |
| `pnpm cf:deploy` | 建置並部署到 Cloudflare |
| `pnpm cf:d1:create` | 建立 D1 資料庫 |
| `pnpm cf:d1:migrate` | 執行本地 D1 遷移 |
| `pnpm cf:d1:migrate:prod` | 執行生產 D1 遷移 |

### 2. Vercel 部署 (替代方案)
- 一鍵部署 Next.js 應用
- 自動處理環境變數
- 無需資料庫即可運行 (前台功能)
- 注意：需要修改 prisma 設定使用 PostgreSQL

### 3. 資料庫
- **Cloudflare D1** (推薦)：已配置，SQLite 相容
- **Supabase / Neon**：PostgreSQL，適合 Vercel 部署

### 4. 郵件服務
- **Resend** (推薦)：已配置，Edge Runtime 相容
- SendGrid、Postmark 等也可透過 API 使用

### 5. 環境變數
```bash
# 必要
JWT_SECRET="your-jwt-secret"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"

# 郵件功能
RESEND_API_KEY="re_xxxx"
EMAIL_FROM="noreply@your-domain.com"

# NextAuth (如有使用)
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="https://your-domain.com"
```

---

## 注意事項

### ⚠️ 開發規範

1. **必須使用 pnpm**：專案配置為使用 pnpm,不要使用 npm 或 yarn
2. **禁用 accept-data-loss**：資料庫操作不允許使用 `--accept-data-loss` 參數
3. **Prisma Client 生成**：修改 schema 後務必執行 `pnpm prisma generate`
4. **環境變數**：`.env` 檔案不包含在版本控制中,部署時需手動設定

### 📌 必需檔案

- **音頻檔案**：已包含 17 分鐘導引音檔 `音樂3fix_回到身體MIX.wav`
  - 格式：WAV (無損音質)
  - 大小：204MB
  - 位置：`public/audio/音樂3fix_回到身體MIX.wav`
- **Favicon 圖標**：使用 `/public/right_white_half.png` 作為網站圖標 (已在 `app/layout.tsx` 中配置)

### 🔒 隱私保護

- 測驗結果預設只存在用戶瀏覽器 (localStorage)
- 只有用戶主動填寫 Email 才會上傳到伺服器
- 符合 GDPR 和隱私保護原則

### 🔗 購書連結

編輯 `app/page.tsx` 和其他頁面中的購書連結,將 placeholder URL 替換為實際的博客來、誠品、讀冊、出版社連結

---

## 更新日誌

### 2025-12-12 - Cloudflare 部署支援

**Edge Runtime 遷移**
- ✅ 新增 `@opennextjs/cloudflare` 部署 adapter
- ✅ 新增 `wrangler.toml` Cloudflare 配置檔
- ✅ 新增 Cloudflare D1 資料庫支援
- ✅ Prisma 新增 `driverAdapters` preview feature
- ✅ 建立 `prisma/migrations/init.sql` D1 初始化腳本

**Edge 相容套件替換**
- ✅ `bcryptjs` → Web Crypto API (PBKDF2)
  - 新增 `lib/auth/password.ts` 使用 Web Crypto
  - 支援舊版 bcrypt 格式密碼（遷移期間）
- ✅ `jsonwebtoken` → `jose`
  - 新增 `lib/auth/jwt.ts` 使用 jose
  - `verifyToken` 改為非同步函數
- ✅ `nodemailer` → `resend`
  - 新增 `lib/email/resend.ts` 使用 Resend API
  - Edge Runtime 完全相容

**API Routes 更新**
- ✅ 所有 API routes 新增 `export const runtime = 'edge'`
- ✅ `verifyToken` 呼叫處全部加上 `await`
- ✅ 移除 `$queryRaw` 使用（D1 不支援）
- ✅ 完整錯誤訊息顯示在前端

**新增 Scripts**
- `pnpm cf:build` - OpenNext 建置
- `pnpm cf:dev` - Cloudflare 本地開發
- `pnpm cf:preview` - 本地預覽
- `pnpm cf:deploy` - 部署到 Cloudflare
- `pnpm cf:d1:create` - 建立 D1 資料庫
- `pnpm cf:d1:migrate` - 執行 D1 遷移

**新增檔案**
- `wrangler.toml` - Cloudflare 配置
- `lib/auth/jwt.ts` - Edge 相容 JWT
- `lib/email/resend.ts` - Resend 郵件服務
- `prisma/migrations/init.sql` - D1 初始化 SQL
- `.env.example` - 環境變數範例

---

### 2025-12-12 - Next.js 16 + React 19.2.1 升級

**核心框架升級**
- ✅ Next.js 15.5.6 → 16.0.7
- ✅ React 19.1.0 → 19.2.1
- ✅ React-DOM 19.1.0 → 19.2.1
- ✅ eslint-config-next 15.5.6 → 16.0.7

**Next.js 16 重要變更**
- ✅ Turbopack 成為預設打包器 (build 速度提升)
- ✅ `middleware.ts` → `proxy.ts` (本專案無 middleware，無需處理)
- ✅ `params` 和 `searchParams` 為 Promise (本專案已符合)
- ✅ Node.js 需要 20.9+ (目前使用 v22.14.0)
- ✅ TypeScript 需要 5.1+ (目前使用 5.x)

**Tailwind CSS 正常運作**
- ✅ 所有樣式正確編譯
- ✅ PostCSS 配置相容

**已知問題**
- ⚠️ next-auth 4.24.11 尚未支援 Next.js 16 (peer dependency 警告)
  - 不影響功能運作，等待官方更新

**參考資料**
- [Next.js 16 發布公告](https://nextjs.org/blog/next-16)
- [升級指南](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [middleware 改名為 proxy](https://nextjs.org/docs/messages/middleware-to-proxy)

---

### 2025-11-07 - 首頁音頻播放器功能完整實現

**AudioGuidePlayer 組件開發**
- ✅ 創建全新的音頻播放器組件 `components/AudioGuidePlayer.tsx`
- ✅ 完美保留首頁原有的精美UI設計（灰色背景、圓角卡片、Material Design 圖標）
- ✅ 核心播放功能：
  - 播放/暫停控制（中央大按鈕）
  - 音頻進度條（可拖動跳轉）
  - 實時時間顯示（當前時間 / 總時長）
  - 快退10秒按鈕
  - 快進10秒按鈕
  - 重新開始按鈕
  - 音量圖標顯示
- ✅ 多重事件監聽確保時長正確加載：
  - `loadedmetadata` - metadata載入時
  - `loadeddata` - 數據載入時
  - `canplay` - 可播放時
  - `durationchange` - 時長改變時
  - `timeupdate` - 播放進度更新時
- ✅ 針對大文件（204MB WAV）優化：
  - 組件掛載時立即檢查 readyState
  - 播放開始後延遲100ms再次嘗試獲取時長
  - 在 timeupdate 事件中持續檢查時長
- ✅ 完整的錯誤處理與用戶提示
- ✅ 響應式設計適配手機和桌面
- ✅ 音頻結束自動停止播放
- 📝 檔案：`components/AudioGuidePlayer.tsx`, `app/page.tsx:4,182`

**音頻文件整合**
- ✅ 音檔路徑：`/audio/音樂3fix_回到身體MIX.wav`
- ✅ 文件大小：204MB (WAV 無損格式)
- ✅ 時長：約17分鐘
- ✅ 支援瀏覽器原生 HTML5 Audio API
- 📝 檔案：`public/audio/音樂3fix_回到身體MIX.wav`

**首頁整合與優化**
- ✅ 將靜態音頻播放器UI替換為功能完整的 AudioGuidePlayer 組件
- ✅ 保持原有區塊ID `#audio-guide` 確保跳轉功能正常
- ✅ 保留所有原有設計元素：說明文字、提示框、說明書按鈕
- ✅ 代碼精簡：從119行靜態UI優化為2行組件調用
- 📝 檔案：`app/page.tsx:182`

**用戶體驗改善**
- ✅ 點擊「開始17分鐘導引」按鈕即可播放音頻
- ✅ 播放時按鈕文字變為「暫停導引」
- ✅ 進度條實時更新顯示播放進度
- ✅ 支援拖動進度條快速跳轉
- ✅ 快進/快退按鈕方便重複練習特定段落
- ✅ 音頻播放結束自動停止

**技術亮點**
- 使用 React Hooks (`useState`, `useRef`, `useEffect`)
- TypeScript 類型安全
- 客戶端組件 (`'use client'`)
- 優雅的錯誤處理和用戶反饋
- 多事件監聽策略確保大文件正確加載
- Console 日誌輔助調試

### 2025-11-07 - 完善後台錯誤處理與顯示

**後台自動登入功能**
- ✅ 新增登入頁面自動認證檢查
- ✅ 功能流程：
  1. 訪問 `/admin` 時自動檢查 localStorage 中的 token
  2. 驗證 token 格式、內容完整性和有效期
  3. Token 有效 → 自動跳轉到 `/admin/dashboard`（不需重新登入）
  4. Token 無效/過期 → 清除 token 並顯示登入表單
- ✅ 新增 `base64UrlDecode()` 函數（與 dashboard 共用邏輯）
- ✅ 檢查時顯示「檢查登入狀態...」載入畫面，避免表單閃爍
- ✅ Token 有效期：7 天（由登入 API 設定）
- ✅ 使用者體驗改善：登入一次後，7 天內訪問後台無需重新登入
- 📝 檔案：`app/admin/page.tsx:3,12,15-64,95-105`

**後台測驗結果表格修復**
- ✅ 修復 `result.quiz.title` 讀取錯誤（MAIA-2 測驗沒有 quiz 關聯）
- ✅ 更新 `QuizResult` 介面為 `MAIA2Result`，匹配實際資料庫 schema
- ✅ 新增 `calculateAverageScore()` 函數：計算 8 個面向的平均分數
- ✅ 表格欄位優化：
  - "測驗者" → "Email"
  - "測驗名稱" → "測驗類型"（固定顯示 "MAIA-2 內感受量表"）
  - "分數" → "平均分數"（顯示格式：`3.25 / 5.00`）
  - "測驗時間" → "完成時間"（使用 `completedAt` 而非 `createdAt`）
- ✅ "查看詳情" 功能改進：
  - 從 Link 改為 button（因為沒有 `/quiz/result/${id}` 路由）
  - 點擊時將測驗結果存入 localStorage
  - 在新分頁開啟 `/quiz/result` 頁面展示雷達圖
- 📝 檔案：`app/admin/dashboard/page.tsx:35-42,67,247-252,439-495`

**後台資料顯示修復**
- ✅ 修復前後端資料結構不一致問題
- ✅ 更新 TypeScript 類型定義以匹配實際 API 回傳資料
- ✅ 將「智慧類型分布」餅圖改為「MAIA-2 八個面向平均分數」柱狀圖
- ✅ 新增 `barChartOptions` 配置：Y 軸範圍 0-5 分（MAIA-2 分數範圍）
- ✅ 自動將英文 key 轉換為中文面向名稱顯示
- ✅ 後台圖表現在正確顯示 MAIA-2 的 8 個面向統計數據
- 📝 檔案：`app/admin/dashboard/page.tsx:45-62,263-316,417-422`

**後台認證與錯誤處理優化（第四輪修復 - JWT 解碼）**
- ✅ **根本原因修復**：JWT 使用 Base64URL 編碼，但 `atob()` 只能解碼標準 Base64
- ✅ 新增 `base64UrlDecode()` 函數：
  1. 將 Base64URL 字元（`-` `_`）轉換為標準 Base64（`+` `/`）
  2. 自動添加正確的 padding (`=`)
  3. 安全地解碼並處理錯誤
- ✅ 修復中文字元（"系統管理員"）在 JWT payload 中無法解碼的問題
- ✅ 支援所有標準 JWT token（包含或不包含 padding）
- ✅ Token 解析成功，後台可以正常顯示管理員名稱
- 📝 檔案：`app/admin/dashboard/page.tsx:78-136`

**技術說明：Base64 vs Base64URL**
- **標準 Base64**：使用字元集 `A-Z, a-z, 0-9, +, /`，需要 padding `=`
- **Base64URL (RFC 4648)**：使用字元集 `A-Z, a-z, 0-9, -, _`，通常省略 padding
- **JWT 規範 (RFC 7519)**：使用 Base64URL 編碼，不含 padding
- **問題**：瀏覽器的 `atob()` 只支援標準 Base64，不支援 Base64URL
- **解決方案**：手動轉換 Base64URL → Base64 → 解碼

**後台認證與錯誤處理優化（第三輪修復）**
- ✅ 修復認證邏輯問題：`checkAuth()` 和 `fetchDashboardData()` 從並行改為順序執行
- ✅ 現在的執行流程：
  1. 先執行 `checkAuth()` 驗證 token
  2. 只有驗證成功才執行 `fetchDashboardData()` 載入資料
  3. 驗證失敗時立即停止載入，不會發送 API 請求
- ✅ `checkAuth()` 改為異步函數，返回 `Promise<boolean>`
- ✅ 驗證失敗時會停止載入動畫 (`setIsLoading(false)`)
- ✅ 避免無效 token 導致的 401 API 錯誤
- 📝 檔案：`app/admin/dashboard/page.tsx:67-165`

**後台認證與錯誤處理優化（第二輪修復）**
- ✅ 修復 `atob()` Base64 解碼失敗的詳細錯誤處理
- ✅ 新增 Base64 格式驗證（檢查是否包含無效字元）
- ✅ Token 解碼錯誤現在會顯示：
  - Base64 解碼失敗的具體原因
  - Token 長度和預覽
  - Payload 部分的預覽
  - Token 各部分的詳細調試資訊（console）
- ✅ 改進所有錯誤訊息的可讀性：
  - Token 格式錯誤：顯示實際部分數量
  - Token 內容不完整：列出已找到和缺少的欄位
  - Token 已過期：顯示過期時間和當前時間
- 📝 檔案：`app/admin/dashboard/page.tsx:79-155`

**後台認證與錯誤處理優化（第一輪修復）**
- ✅ 修復管理後台 Token 驗證失敗只顯示在 console 的問題
- ✅ 新增完整的前端錯誤顯示介面（紅色警告卡片 + 錯誤圖標）
- ✅ Token 驗證失敗時會：
  1. 顯示詳細錯誤訊息（格式錯誤/內容不完整/已過期）
  2. 自動清除無效的 token
  3. 3 秒後自動返回登入頁（或可手動點擊按鈕）
- ✅ 改進 API 資料載入錯誤處理：
  - 統計資料載入失敗會顯示完整錯誤訊息
  - 測驗結果載入失敗會顯示完整錯誤訊息
  - 所有錯誤都會顯示 HTTP 狀態碼和伺服器回傳的錯誤內容
- ✅ 符合「所有錯誤完整顯示在前端」的開發規範
- 📝 檔案：`app/admin/dashboard/page.tsx:65,72-118,201-227`

**後台統計 API 資料庫欄位修復**
- ✅ 修復 `/api/admin/stats` 中的 SQL 查詢錯誤
- ✅ 問題原因：PostgreSQL 中使用雙引號的 camelCase 欄位 (`"createdAt"`) 需要在 SQL 查詢中加上雙引號
- ✅ 解決方案：將 SQL 查詢中的 `created_at` 改為 `"createdAt"` (加上雙引號)
- ✅ 影響範圍：過去 7 天測驗統計圖表現在可以正常顯示
- 📝 檔案：`app/api/admin/stats/route.ts:77-81`

**技術說明**
- PostgreSQL 的欄位名稱處理：
  - 沒有雙引號：自動轉為小寫 (`created_at`)
  - 有雙引號：保留原始大小寫 (`"createdAt"`)
- Prisma migration 生成的欄位是 `"createdAt"` (有雙引號)
- 因此在 `$queryRaw` 中也必須使用 `"createdAt"` (有雙引號)

### 2025-11-06 - 主視覺按鈕跳轉功能

**首頁互動優化**
- ✅ 主視覺「開始 17 分鐘導引」按鈕新增跳轉功能
- ✅ 點擊按鈕後平滑滾動至下方音頻播放器區域
- ✅ 使用錨點連結 (#audio-guide) 實現跳轉
- ✅ 添加 scroll-smooth 類別實現平滑滾動效果
- ✅ 添加 scroll-mt-20 避免跳轉後內容被遮擋
- 📝 檔案：`app/page.tsx:7,62,181`

### 2025-11-06 - MAIA-2 量表說明書完整設計完成

**MAIA-2 中文版量表 - 使用與解讀說明**
- ✅ 全新設計的 MAIA-2 量表說明書頁面 (`/quiz/manual`)
- ✅ 簡潔優雅的卡片式設計，與完整版說明書風格一致
- ✅ **標題：** MAIA-2 中文版量表 - 使用與解讀說明
- ✅ **卡片 1：** 使用前的心態 + 作答方式（❤️ + 📝）
- ✅ **卡片 2：** 結果解讀 - 8 個面向（🧭 完整列出 8 個面向）
- ✅ **卡片 3：** 如何使用結果（❓ 觀察輪廓、重點在變化、給自己方向）
- ✅ **特殊元素：** 小提醒框（深灰色背景 + 白色文字）
- ✅ **卡片 4：** 延伸練習與支持 + 最後（🏁 + 💬）
- ✅ **卡片 5：** 資料來源（🔗 學術引用）
- ✅ 響應式設計適配手機和桌面
- ✅ 底部按鈕：「開始測驗」和「返回主頁」
- 📝 檔案：`app/quiz/manual/page.tsx`

### 2025-11-06 - 完整版說明書完整設計完成

**完整版說明書 (17分鐘版本) - 6張完整卡片**
- ✅ 全新設計的完整版說明書頁面 (`/manual-full`)
- ✅ 簡潔優雅的卡片式設計，與精簡版風格一致
- ✅ 標題：《回到身體》17 分鐘身心學導引 - 完整版說明書
- ✅ **卡片 1：** 介紹（快速版 vs 完整版對比 + 歡迎文字）
- ✅ **卡片 2：** 為什麼要做 + 開始前（安全與同意）
- ✅ **卡片 3：** 路線圖（10個完整步驟 + 核心節律提示框）
- ✅ **卡片 4：** 劑量×節奏 + 成效指標 + 安全燈號（紅綠燈設計）
- ✅ **卡片 5：** 如果卡住了 + 與本書的最佳搭配 + MAIA-2 變化
- ✅ **卡片 6：** 為什麼這 17分鐘有效 + 最後的邀請
- ✅ 特殊設計元素：SOS 救急版（黑底白字）、核心節律（白色框框）、紅綠燈燈號（彩色標示）
- ✅ 響應式設計適配手機和桌面
- ✅ 底部按鈕：「查看快速版」和「返回主頁」
- 📝 檔案：`app/manual-full/page.tsx`

### 2025-11-04 - 首頁新增粒子飄動效果

**視覺效果優化**
- ✅ 新增輕量級粒子飄動效果 (50 個深灰色粒子)
- ✅ 使用純 CSS 動畫,不耗費效能
- ✅ 粒子大小 3-8px,透明度 0.4-0.7 (更明顯可見)
- ✅ 飄動速度 15-25 秒隨機
- ✅ 深灰色粒子 (#808080) 在淺灰背景上清晰可見
- ✅ 不影響用戶交互 (pointer-events-none)
- ✅ 修復 React Hydration Mismatch 問題 (使用 useEffect 只在客戶端生成粒子)
- 📝 檔案：`components/ParticleEffect.tsx`, `app/page.tsx:3,25`

### 2025-11-04 - 精簡版說明書完整改版

**精簡版說明書結構優化**
- ✅ 第一張卡片：「為什麼要做 + 15秒起手式」整合設計
- ✅ 第二張卡片：新增「路線圖」區塊（10個步驟完整指引）
- ✅ 第三張卡片：新增「劑量×節奏 + 成效指標 + 安全燈號 + 想更深入」
  - 特色：SOS 90秒救急版（黑底白字突出顯示）
  - 紅綠燈設計（綠燈/黃燈/紅燈顏色區分）
  - 成效指標：重量回來、吐氣變長、視野變寬
- ✅ 時間範圍從「5-13 分鐘」更新為「5-17 分鐘」
- ✅ 優化文字排版間距,提升可讀性
- ✅ 統一卡片樣式（灰色背景、黑色圓形編號）
- ✅ 響應式設計適配手機和桌面
- 📝 檔案：`app/manual-simple/page.tsx`

### 2025-11-04 - 響應式設計完善

**精簡版說明書完全重新設計**
- ✅ 卡片式設計 (白色卡片 + 黑底白字圓形圖標)
- ✅ 標題區域置中對齊
- ✅ 強制白色背景主題,不受深色模式影響
- ✅ 完美適配手機和桌面
- 📝 檔案：`app/guide/manual-simple/page.tsx`

**Quiz 頁面響應式優化 (兩輪修復)**
- ✅ 評分按鈕布局改進 (手機版 3 列)
- ✅ 導航欄書名截斷問題修復
- ✅ 所有文字尺寸針對手機版優化
- ✅ 確保無橫向滾動 (375px 寬度螢幕)
- 📝 檔案：`app/quiz/page.tsx`

### 2025-11-03 - 新版主視覺設計

**首頁完全重新設計**
- ✅ 極簡導航 + 超大標題
- ✅ 柔和波浪背景 (白色 SVG, 80% 透明度)
- ✅ 六個區塊：核心概念、音頻播放器、MAIA-2 量表、購買連結、作者簡介
- ✅ 完美適配桌面、平板、手機
- 📝 檔案：`app/page.tsx`

### 2025-10-22 - 核心問題修復

- ✅ API 路由完全重寫 (匹配 MAIA-2 的 8 個覺察面向邏輯)
- ✅ 資料庫 Schema 重新設計
- ✅ 郵件功能完整配置 (支援 Gmail、Resend、SendGrid)
- ✅ 圖片資源處理 (添加 SVG 佔位符)
- ✅ TypeScript 編譯成功 (所有類型錯誤已修復)

### 新增的文檔

- `/docs/EMAIL_SETUP.md` - 完整的郵件配置指南
- `/public/IMAGES_README.md` - 圖片資源說明和替換指南
- `/public/audio/README.md` - 音頻文件完整說明

---

## Build 狀態

### ✅ Build 狀態：成功

最後 build 時間：2025-12-12
使用 Turbopack (Next.js 16 預設打包器)

### 已修復的問題

1. **Next.js 15 動態路由參數變更** - `params` 改為 Promise 並使用 `await`
2. **導航組件使用錯誤** - 改用 `next/link` 的 `Link` 組件
3. **TypeScript 類型安全** - 移除 `any` 類型,使用類型推斷
4. **HTML 字符轉義** - 使用 `&apos;` 轉義所有單引號
5. **Chart.js 類型問題** - 添加 `eslint-disable-next-line` 註解
6. **Zod 錯誤屬性命名** - 使用 `error.issues` 而非 `error.errors`

### ⚠️ 警告 (不影響 build)

以下警告不會阻止專案運行,但建議逐步優化：

- 未使用的導入：`Image`, `Bar`, `getDimensionName`, `authorData`
- 未使用的變數：部分 catch 區塊的 `error` 變數
- React Hook 依賴：`checkAuth` 未加入 useEffect 依賴陣列
- 圖片優化：`AudioPlayer.tsx` 使用 `<img>` 而非 `next/image`

---

## 授權

MIT License
