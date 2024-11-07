/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      perspective:{
        '500': '500px',
        '1000': '1000px',
        '1500': '1500'
      },
      width:{
        '30rem': '30rem'
      }
    },
  },
  plugins: [],
}

