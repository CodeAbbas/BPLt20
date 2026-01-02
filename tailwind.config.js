/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bpl: {
          primary: '#006A4E', // Bangladesh Green
          secondary: '#F42A41', // Red accent
          dark: '#111827',
          light: '#F3F4F6',
          accent: '#FFD700', // Gold for winners/trophy
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'], // Strong font for scores/headings
      }
    },
  },
  plugins: [],
}