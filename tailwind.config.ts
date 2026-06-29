import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        night: "#0a0b1a", // page background
        panel: "#12142b", // card / secondary background
        gold: {
          DEFAULT: "#f0c060", // primary accent (warm gold)
          soft: "#f6d68f",
          deep: "#d9a63f",
        },
        celeste: {
          DEFAULT: "#5b8dee", // secondary accent (soft blue)
          soft: "#8fb2f4",
          deep: "#3f6fd1",
        },
        subtext: "#8b8fa8",
      },
      fontFamily: {
        // Wired up to the next/font CSS variables in app/layout.tsx
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(240, 192, 96, 0.45)",
        celeste: "0 0 40px -8px rgba(91, 141, 238, 0.45)",
        card: "0 24px 60px -28px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f6d68f 0%, #f0c060 45%, #d9a63f 100%)",
        "celeste-gradient": "linear-gradient(135deg, #8fb2f4 0%, #5b8dee 100%)",
        "aurora": "linear-gradient(135deg, #f0c060 0%, #f6d68f 30%, #8fb2f4 70%, #5b8dee 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        spin_slow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 6s linear infinite",
        "spin-slow": "spin_slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
