#!/bin/bash

echo "🔄 開始重啟服務..."

# 1. 停止 PM2
echo "📛 正在關閉伺服器..."
pm2 stop book-showcase || echo "PM2 未運行"

# 等待進程完全關閉
sleep 3

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

# 4. 使用 PM2 啟動
echo "🚀 正在啟動伺服器..."
pm2 restart book-showcase || pm2 start ecosystem.config.js
pm2 save

echo "✅ 重啟完成！"
echo "💡 使用 'pm2 logs' 查看日誌"
echo "💡 使用 'pm2 status' 查看狀態"
echo "💡 使用 'pm2 monit' 監控資源使用"
