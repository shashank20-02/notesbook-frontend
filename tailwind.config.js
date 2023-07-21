/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "rgb(255, 195, 0)",
        back: "rgb(243, 229, 171)",
        light: "rgb(250, 249, 246)",
        dark: "rgb(40, 40, 43)",
        one: "#B0E57C",
        two: "#FFEC94",
        three: "#9BD1FA",
        four: "#FF9900",
        five: "#FFCC99",
        six: "#FDD456",
      },
      fontFamily: {
        barlow: "Barlow",
        ph: "Patrick Hand",
      },
    },
  },
  plugins: [],
};
