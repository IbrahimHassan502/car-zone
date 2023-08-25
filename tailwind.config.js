/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/js/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FC621C",
      },
      fontFamily: {
        heading: ["Abril\\ Fatface", "crusive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
