/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        custom: '20rem',
      },
      backgroundImage: {
        'hero-section': "url('/Assests/image.png')",
        'about-section': "url('./Assests/AboutBackground1.png')",
      },
    },
  },
  plugins: [],
};
