/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    screens: {
      'sm': '375px',
      'md': '770px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'VeryDarkMagenta': 'hsl(300, 43%, 22%)',
      'SoftPink': 'hsl(333, 80%, 67%)',
      'DarkGrayishMagenta' : 'hsl(303, 10%, 53%)',
      'LightGrayishMagenta' : 'hsl(300, 24%, 96%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    extend: {
    },
  },
  plugins: [],
}
