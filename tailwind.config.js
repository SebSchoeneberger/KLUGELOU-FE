/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "Arial", "sans-serif"], // Helvetica Neue as primary with fallbacks
        nunito: ['"Nunito Sans"', "sans-serif"], // Nunito Sans
        inria: ['"Inria Serif"', "serif"], // Inria Serif
      },
      colors: {
        customBlack: "#0D0C22",
      },
      animation: {
        slideX: "slideX 20s linear infinite",
      },
      keyframes: {
        slideX: {
          "0%": {
            transform: "translateX(calc(-1 * (8rem + 1.5rem) * (18 / 2)))",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [daisyui],
};
