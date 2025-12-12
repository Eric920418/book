#!/bin/bash

# ===========================================
# Book Showcase - Production Restart Script
# ===========================================

set -e

APP_DIR="/var/www/book"
APP_NAME="book-showcase"
LOG_FILE="$APP_DIR/logs/restart.log"

# 顏色輸出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    echo "[ERROR] $1" >> "$LOG_FILE"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
    echo "[WARN] $1" >> "$LOG_FILE"
}

# 確保 logs 目錄存在
mkdir -p "$APP_DIR/logs"

log "========== Starting restart process =========="

# 1. 清理記憶體快取（需要 root 權限）
log "Step 1: Clearing memory cache..."
if [ "$EUID" -eq 0 ]; then
    sync && echo 3 > /proc/sys/vm/drop_caches
    log "Memory cache cleared"
else
    warn "Skipping memory cache clear (requires root)"
fi

# 2. 顯示當前記憶體狀態
log "Step 2: Current memory status:"
free -h | tee -a "$LOG_FILE"

# 3. 切換到應用目錄
cd "$APP_DIR"

# 4. 停止現有的 PM2 進程
log "Step 3: Stopping existing PM2 process..."
pm2 stop "$APP_NAME" 2>/dev/null || warn "Process not running or already stopped"

# 5. 清理 PM2 日誌（可選）
log "Step 4: Flushing PM2 logs..."
pm2 flush "$APP_NAME" 2>/dev/null || true

# 6. 垃圾回收
log "Step 5: Running Node.js garbage collection..."
export NODE_OPTIONS="--max-old-space-size=384 --expose-gc"

# 7. 啟動應用
log "Step 6: Starting application with PM2..."
pm2 start ecosystem.config.js

# 8. 等待應用啟動
log "Step 7: Waiting for application to start..."
sleep 5

# 9. 檢查應用狀態
log "Step 8: Checking application status..."
pm2 status "$APP_NAME"

# 10. 顯示最終記憶體狀態
log "Step 9: Final memory status:"
free -h | tee -a "$LOG_FILE"

# 11. 健康檢查
log "Step 10: Health check..."
sleep 2
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200\|302"; then
    log "Application is healthy and responding"
else
    warn "Application may not be responding yet. Check logs if issues persist."
fi

log "========== Restart complete =========="

# 顯示 PM2 監控命令提示
echo ""
echo -e "${GREEN}Useful commands:${NC}"
echo "  pm2 logs $APP_NAME    - View application logs"
echo "  pm2 monit             - Monitor CPU/Memory usage"
echo "  pm2 status            - Check process status"
echo "  pm2 restart $APP_NAME - Quick restart"
