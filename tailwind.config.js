/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: '1600px',
        md: '1728px',
        lg: '1984px',
        xl: '1940px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [],
}