/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.md", "./_includes/**/*.njk"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
