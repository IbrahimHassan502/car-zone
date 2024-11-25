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
      screens: {
        xs: "300px",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
