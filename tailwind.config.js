/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixelify':["Pixelify Sans", "sans-serif"],
        'inter':["Inter", "sans-serif"]
      },
      screens: {
        'custom': '1007px'
      }
    },
  },
  plugins: [],
}

