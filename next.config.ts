import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OpenNext / Cloudflare 相容設定
  experimental: {
    // 啟用 Server Actions（如果有使用）
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // 圖片最佳化設定（Cloudflare 環境）
  images: {
    // Cloudflare 環境下使用 unoptimized 或設定 loader
    unoptimized: true,
  },

  // TypeScript 設定
  typescript: {
    // 在 build 時忽略 TypeScript 錯誤（可選）
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
