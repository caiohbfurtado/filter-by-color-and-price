/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        branding: {
          black: '#0A0A0A',
          'off-white': '#F2F2F2',
          'navy-blue': '#0A3044',
          'olive-green': '#5E8B54',
          burgundy: '#800020',
          grey: { 400: '#E6EBF0', 500: '#F8F9FA', 800: '#606060' },
          beige: '#D5C4A1',
          maroon: '#400000',
          teal: '#008080',
          mustard: '#FFC400',
          orange: '#FF9A24',
          'beige-text': '#322200',
          white: '#FFFFFF',
        },
      },
      gridTemplateColumns: {
        100: 'repeat(10, minmax(0, 1fr))',
      },
      screens: {
        laptop: { max: '1250px' },
        ipad: { max: '1000px' },
        tablet: { max: '640px' },
        mini: { max: '530px' },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
