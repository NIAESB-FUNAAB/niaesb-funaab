/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'niaesb-green': '#07562C',
        'niaesb-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}