/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#282D33",
        "custom-darker": "#161618",
        "custom-mid-dark": "#1F2326",
      },
    },
  },
  plugins: [],
}
