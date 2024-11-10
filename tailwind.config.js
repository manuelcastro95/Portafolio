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
      colors: {
        primary: '#E74C3C',    // Rojo del logo
        secondary: '#2C3E50',  // Azul oscuro para contraste
        accent: '#3498DB',     // Azul para acentos
        warm: '#ECF0F1',       // Gris cálido para fondos
        soft: '#F8F9FA',       // Blanco suave
        dark: '#1A1A1A',       // Negro suave
        'light-gray': '#F5F5F5' // Gris claro
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        }
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
}