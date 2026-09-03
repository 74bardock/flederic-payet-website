/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A3B8C",
          blueHover: "#082d6b",
          red: "#E52421",
          redHover: "#c41b18",
          bg: "#F4F6F9",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};