/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '640px',
        md: '780px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
