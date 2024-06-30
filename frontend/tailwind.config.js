/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow:{
        'custom':'0 0 24px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  variants:{},
  plugins: [],
}

