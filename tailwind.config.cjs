/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : {
          50: '#FBFDFE',
          100: '#F7FBFD',
          200: '#E9F4F9',
          300: '#DBEDF5',
          400: '#C1DFEE',
          500: '#A6D1E6',
          600: '#94BBCD',
          700: '#647E8A',
          800: '#4B5F68',
          900: '#313D43'
          },
          'secondary' : {
            50: '#F9F7F9',
            100: '#F3EEF3',
            200: '#DFD4E0',
            300: '#CBB9CD',
            400: '#A686A9',
            500: '#7F5283',
            600: '#724975',
            700: '#4D324F',
            800: '#3A253B',
            900: '#251826'
            }
      }
    },
  },
  plugins: [],
}
