const theme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      text: ["Inter", "sans-serif"],
      headers: ["Climate Crisis"],
    },
    colors: {
      white: "#FFFFFF",
      green: "#9ADDB1",
      blue: "#9AADDD",
      grey: {
        solid: "#000000",
        transparent: "rgba(0, 0, 0, 0.3)",
      },
    },
    extend: {},
  },
  plugins: [],
}
