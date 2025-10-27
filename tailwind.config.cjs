/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // Use class-based dark mode so toggling the 'dark' class on <html> works
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
