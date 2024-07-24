/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
        screens: {
          xl: '1360px',
          l: '920px',

        }
      }
    },
  },
  plugins: [],
}