/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        branding: {
          black: '#0A0A0A',
          'off-white': '#F2F2F2',
          'navy-blue': '#0A3044',
          'olive-green': '#5E8B54',
          burgundy: '#800020',
          grey: '#606060',
          beige: '#D5C4A1',
          maroon: '#400000',
          teal: '#008080',
          mustard: '#FFC400',
          orange: '#FF9A24',
        },
      },
    },
  },
  plugins: [],
}
