/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        'waterbrush' : ['Water Brush', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif'],
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
