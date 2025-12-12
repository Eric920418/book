import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        // 自訂灰階色系
        gray: {
          darkest: "var(--gray-darkest)",
          dark: "var(--gray-dark)",
          medium: "var(--gray-medium)",
          light: "var(--gray-light)",
          lightest: "var(--gray-lightest)",
          white: "var(--gray-white)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        snowfall: {
          '0%': {
            transform: 'translateY(-10px) translateX(0)',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(var(--horizontal-move, 0px))',
          },
        },
      },
      animation: {
        snowfall: 'snowfall linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
