import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04060a",
        foreground: "#f3f6fd",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,.12) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(108,132,255,.4), 0 8px 32px rgba(5,8,23,.45)",
      },
    },
  },
  plugins: [],
};

export default config;
