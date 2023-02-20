/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,js}'],
 darkMode: 'class', // or 'media' or 'class'
 theme: {
  container: {
   center: true,
   padding: '16px',
  },
  extend: {
   colors: {
    primary: '#0ea5e9',
    dark: '#0f172a',
    secondary: '#64748b',
   },
   fontFamily: {
    meFont: ['Playfair Display'],
   },
   screens: {
    '2xl': '1320px',
   },
  },
 },
 plugins: [],
};
