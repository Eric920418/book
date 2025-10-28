#!/bin/bash

echo "🔄 開始更新專案..."

# 1. 拉取最新代碼
echo "📥 正在拉取最新代碼..."
git pull origin main

if [ $? -ne 0 ]; then
  echo "❌ Git pull 失敗！"
  exit 1
fi

# 2. 檢查是否需要安裝新套件
if git diff HEAD@{1} HEAD --name-only | grep -q "package.json"; then
  echo "📦 檢測到 package.json 變更，正在安裝套件..."
  npm install
fi

# 3. 檢查是否需要更新資料庫
if git diff HEAD@{1} HEAD --name-only | grep -q "prisma/schema.prisma"; then
  echo "🗄️  檢測到 schema 變更，正在更新資料庫..."
  npm run db:push
fi

# 4. 執行重啟腳本
echo "🚀 執行重啟..."
./restart.sh

echo "✅ 更新完成！"
