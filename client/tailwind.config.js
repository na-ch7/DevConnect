/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#b3e0ff',
        darkblue: '#003366',
        purple: '#A020F0',
        periwinkle: '#CCCCFF',
      },
      fontFamily:{
        spotify: ['Gotham Medium 500' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}


