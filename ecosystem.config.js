module.exports = {
  apps: [{
    name: 'book-showcase',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/book',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '400M',
    env: {
      NODE_ENV: 'production',
      NODE_OPTIONS: '--max-old-space-size=384'
    },
    // 記憶體優化設定
    exp_backoff_restart_delay: 100,
    // 日誌設定
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    // 效能監控
    min_uptime: '10s',
    max_restarts: 10,
    restart_delay: 4000,
    // 優雅關閉
    kill_timeout: 5000,
    listen_timeout: 8000
  }]
}
