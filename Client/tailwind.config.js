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
        'Mobile-Hero-section': "url('./Assests/MobileBackground.png')",
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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBGiwWPvEXSIuh_i0Dft3_3SQzXF5GC4LA',
//   authDomain: 'dine-restaurant-f4739.firebaseapp.com',
//   projectId: 'dine-restaurant-f4739',
//   storageBucket: 'dine-restaurant-f4739.firebasestorage.app',
//   messagingSenderId: '963326269079',
//   appId: '1:963326269079:web:d841de97611ae9f154fbd2',
//   measurementId: 'G-86YD6DMJLP',
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);