/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
      colors:{
        'dark' : '#223843',
        'dark-light' : '#2c4957',
        'light-gray': '#eff1f3',
        'soft' : '#8eb1c7',
        'accent': '#b2a429',
        'warm' : '#e0a96d'
      }
    },
    container: {
      center:true
    },
  },
  plugins: [],
}