/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}