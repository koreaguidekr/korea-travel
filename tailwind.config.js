/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Noto Serif KR'", "serif"],
      },
      colors: {
        korea: {
          red: "#C8102E",
          blue: "#003478",
          cream: "#FAF7F2",
          stone: "#E8E0D5",
          charcoal: "#1A1A1A",
          gold: "#C9A84C",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-2%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};
