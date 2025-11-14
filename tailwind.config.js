/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        progress: "progress 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
