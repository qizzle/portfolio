/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Calistoga", "sans-serif"],
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
