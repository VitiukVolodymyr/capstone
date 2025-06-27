/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans-condensed': ['"Open Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
