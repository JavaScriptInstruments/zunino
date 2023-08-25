// import type { Config } from "tailwindcss"

// module.exports = {
//   content: ["./app/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
};