#!/bin/bash

echo "🔄 開始重啟服務..."

# 1. 關閉目前的 Next.js 伺服器
echo "📛 正在關閉伺服器..."
# 終止所有相關進程（包括父進程和子進程）
pkill -f "next-server" || echo "沒有找到 next-server"
pkill -f "next start" || echo "沒有找到 next start"
pkill -f "next dev" || true

# 等待進程完全關閉
sleep 3

# 確認端口已釋放
if ss -tlnp | grep -q :3000; then
  echo "⚠️  端口 3000 仍被佔用，強制終止..."
  fuser -k 3000/tcp 2>/dev/null || true
  sleep 1
fi

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
