/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2FA',
          100: '#D0DAEA',
          200: '#AFBEDB',
          300: '#8EA3CB',
          400: '#6D88BB',
          500: '#4C6DAB',
          600: '#2F539A',
          700: '#1A3B82',
          800: '#0E2660',
          900: '#071540',
          DEFAULT: '#0E2660',
        },
        teal: {
          50:  '#E0F8F8',
          100: '#B3EDEE',
          200: '#80E2E3',
          300: '#4DD6D8',
          400: '#26CCCE',
          500: '#00C2C5',
          600: '#0AB5B7',
          700: '#089FA1',
          800: '#068688',
          900: '#04605F',
          DEFAULT: '#0AB5B7',
        },
        coral: {
          50:  '#FEF0EC',
          100: '#FDD4C8',
          200: '#FBB5A0',
          300: '#F99578',
          400: '#F7775A',
          500: '#F4583C',
          DEFAULT: '#F4583C',
          600: '#E03E24',
          700: '#C22B15',
          800: '#9E1D0C',
          900: '#7A1105',
        },
        sand: {
          DEFAULT: '#FFF8F0',
          dark:    '#F0E8D8',
        },
      },
      fontFamily: {
        heading: ['Righteous', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
