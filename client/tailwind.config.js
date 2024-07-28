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
        shaft: '#333'
      },
      fontFamily:{
        monopoly: ['Monopoly' , 'sans-serif'],
      },
      width:{
        '65':'55rem'
      },
      height:{
        '65':'15rem'
      },
      margin:{
        '40':'12rem',
        '30':'10rem',
      },
      borderRadius:{
        'sm':'5px',
        'm':'20px'
      }
    },
  },
  plugins: [],
}


