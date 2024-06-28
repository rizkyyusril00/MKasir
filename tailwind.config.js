/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#052048',
        secondari: '#39a739',
      },
      animation: {
        "spins": "spins 4s linear infinite",
      },
      keyframes: {
        "spins":{
          from: {transform: "rotate(0deg)"},
          to: {transform: "rotate(360deg)"},
        },
      },
    },
  },
  plugins: [],
}