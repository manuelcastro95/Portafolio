/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    backgroundImage: {
      'fondo': "url('../../public/assets/imagenes/bg.jpg')",
    },
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      'cst2': '280px',
      'cst': '360px',
      'sml': '414px',
      'med': '480px',
      'lrg': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

