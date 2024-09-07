/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
    colors: {
      'basic': "#172339",
      'white': "#FFFFFF",
      'back_green': "#F3FFF9",
      'green': "#06813E",
      'grey': "#C0C0C0",
    }
  },
  plugins: [],
}