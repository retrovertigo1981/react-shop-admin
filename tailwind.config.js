/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
