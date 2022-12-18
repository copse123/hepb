/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};
