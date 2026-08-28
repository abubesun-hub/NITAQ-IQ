/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce5f2',
          200: '#c0d0e8',
          300: '#94b0d8',
          400: '#6289c3',
          500: '#3f6aad',
          600: '#2f5391',
          700: '#274476',
          800: '#1c3257',
          900: '#12243f',
          950: '#0a172c',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f6efcd',
          200: '#eedd9d',
          300: '#e5c765',
          400: '#dcb33e',
          500: '#c9a227',
          600: '#ad7f20',
          700: '#8a5f1d',
          800: '#734d1f',
          900: '#62401f',
          950: '#39210f',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'sans-serif'],
        display: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(201, 162, 39, 0.25)',
      },
    },
  },
  plugins: [],
};
