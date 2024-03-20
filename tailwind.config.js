/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        'pink': "#EB1974" ,
        'abu': "#C4C4C4",
        'pink-gelap': "#9E1752"
    },
    fontFamily:{
      'poppins':["Poppins"],
      'roboto':["Roboto"]
    }
    },
  },
  plugins: [],
}