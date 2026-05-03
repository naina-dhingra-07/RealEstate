/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:   '#C8102E',
        branddark: '#9e0c23',
        ink:     '#111111',
        offwhite:'#F5F3EF',
        bone:    '#EAE7E1',
        muted:   '#7a7570',
        card:    '#FFFFFF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Libre Franklin"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.08)',
        lift: '0 8px 32px rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
}
