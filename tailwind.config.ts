import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 45% — brand red
        brand: {
          DEFAULT: "#B3121F",
          dark: "#8A0F18",
          light: "#D94B54",
        },
        // 45% — white / paper
        paper: {
          DEFAULT: "#FFFFFF",
          off: "#FAF9F7",
        },
        // 15% — neutral ink scale
        ink: {
          900: "#171412",
          700: "#4A4340",
          500: "#78716C",
          300: "#B8B2AD",
          150: "#E8E4E0",
          100: "#F1EEEB",
        },
        // 5% — accent
        accent: {
          DEFAULT: "#1F6F5C",
          light: "#3C8F7A",
        },
      },
      fontFamily: {
        head: ["var(--font-head)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
