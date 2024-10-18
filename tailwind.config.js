/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Helvetica Neue as primary with fallbacks
        nunito: ['"Nunito Sans"', 'sans-serif'], // Nunito Sans
        inria: ['"Inria Serif"', 'serif'], // Inria Serif
      },
      colors: {
        customBlack: '#0D0C22',
      }
    },
  },
  plugins: [daisyui]
};
