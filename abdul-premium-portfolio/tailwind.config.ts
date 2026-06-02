import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(56,189,248,.22)",
        gold: "0 0 60px rgba(245,158,11,.18)"
      },
      backgroundImage: {
        luxury: "radial-gradient(circle at 20% 20%, rgba(14,165,233,.22), transparent 35%), radial-gradient(circle at 80% 10%, rgba(245,158,11,.16), transparent 30%), linear-gradient(135deg, #020617 0%, #08111f 45%, #0f172a 100%)"
      }
    }
  },
  plugins: []
};
export default config;
