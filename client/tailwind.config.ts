import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Blue
        secondary: "#FBBF24", // Yellow
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
