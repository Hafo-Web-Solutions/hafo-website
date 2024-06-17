/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      screens: {
        'lg-1500': '1400px',
      },
      transitionProperty: {
        'position': 'left, bottom',
        'width': 'width',
      },
    },
  },
  plugins: [],
}

