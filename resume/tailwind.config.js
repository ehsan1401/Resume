/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Palette: {
        Dark : {
          first:  '#EEEEEE',
          second:  '#76ABAE',
          third:  '#31363F',
          fourth:  '#222831',
        },
        Light:{
          first:  '#876445',
          second:  '#CA965C',
          third:  '#EEC373',
          fourth:  '#F4DFBA',
        }
        },
      },
    },
  },
  plugins: [],
}

