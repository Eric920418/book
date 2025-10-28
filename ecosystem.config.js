module.exports = {
  apps: [{
    name: 'book-showcase',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/book',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
}
