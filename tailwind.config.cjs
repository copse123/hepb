/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [daisyui, lineClamp],
  daisyui: {
    themes: false,
  },
};
