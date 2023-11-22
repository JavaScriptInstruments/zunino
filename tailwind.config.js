// import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        logo: ["NunitoSans", "NunitoSans Extra Light", "NunitoSans Override"],
        customfontname: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
