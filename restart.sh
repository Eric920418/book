#!/bin/bash

echo "🔄 開始重啟服務..."

# 1. 關閉目前的 Next.js 伺服器
echo "📛 正在關閉伺服器..."
pkill -f "next start" || echo "沒有找到運行中的伺服器"
pkill -f "next dev" || true

# 等待進程完全關閉
sleep 2

# 2. 刪除 .next 資料夾
echo "🗑️  正在刪除 .next 資料夾..."
if [ -d ".next" ]; then
  rm -rf .next
  echo "✅ .next 資料夾已刪除"
else
  echo "⚠️  .next 資料夾不存在"
fi

# 3. 執行 build
echo "🔨 正在建置專案..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ 建置失敗！"
  exit 1
fi

echo "✅ 建置完成"

# 4. 啟動伺服器
echo "🚀 正在啟動伺服器..."
npm run start &

echo "✅ 重啟完成！"
echo "💡 提示：使用 'pkill -f \"next start\"' 可以停止伺服器"
