import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050708",
        panel: "#0d1114",
        line: "#1d2a2f",
        muted: "#9aa8ad",
        aqua: "#53f3e1",
        amber: "#d6a95b",
        rosegold: "#dfb0a9",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
