/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        custom: '20rem',
      },
      backgroundImage: {
        'hero-section': "url('/src/assets/image.png')",
        'about-section': "url('/src/assets/AboutBackground1.png')",
        'Mobile-Hero-section': "url('/src/assets/MobileBackground.png')",
      },
    },

    screens: {
      xs: { max: '20em' }, // up to 320px
      sm: { min: '20.063em', max: '37.5em' }, // 321px to 600px (small devices)
      md: { min: '37.563em', max: '56.25em' }, // 601px to 900px (medium devices)
      lg: { min: '56.313em', max: '75em' }, // 901px to 1200px (large devices)
      xl: { min: '75.063em' }, // 1201px and above (extra-large devices)
    },
  },
  plugins: [],
};

