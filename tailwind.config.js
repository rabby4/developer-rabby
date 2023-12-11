/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown:{
          400: '#ba935b',
          500: '#a0876e',
          900: '#5c544d'
        },
        gray: '#3f4245'
      }
    },
  },
  plugins: [require("daisyui")],
}

