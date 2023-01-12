/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "984px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [],
};
