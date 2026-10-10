import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FFF7E3",
          200: "#FDF2CE",
          300: "#FAECB2",
          400: "#F6E391",
          500: "#F0D76B",
          bg: "#F8F5ED",
          warm: "#FAF3E0",
          card: "#FFFBF2",
        },
        brown: {
          900: "#20271F",
          800: "#2D1810",
          700: "#3E2317",
          600: "#543020",
          500: "#70412B",
          400: "#8D543B",
          deep: "#24130C",
          earth: "#331E14",
        },
        brandGreen: {
          900: "#173E2C",
          800: "#143D22",
          700: "#1B522D",
          600: "#1E5631",
          500: "#2D6A4F",
          400: "#40916C",
          100: "#D8F3DC",
          50: "#EAF7ED",
          leaf: "#1E5631",
        },
        saffron: {
          600: "#C64600",
          500: "#B64C25",
          400: "#F48C06",
          300: "#FAA307",
          deep: "#D9480F",
          glow: "#FF6D00",
        },
        turmeric: {
          500: "#FFB703",
          400: "#F9C74F",
          300: "#FCE182",
          gold: "#EAA812",
        },
        // [ADDED] Terracotta tints for background contrast
        terracotta: {
          50: "#FDF5F2",
          100: "#FBEAE4",
          500: "#C85A32",
          600: "#B84A28",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Outfit", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Rozha One", "serif"],
        devanagari: [
          "var(--font-devanagari)",
          "Rozha One",
          "Noto Sans Devanagari",
          "serif",
        ],
        brush: ["var(--font-brush)", "Kalam", "cursive"],
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-1.5deg)" },
        },
      },
    },
  },
  // [ADDED] tailwindcss-animate plugin to support animate-in, fade-in, and slide-in utilities
  plugins: [require("tailwindcss-animate")],
};

export default config;
