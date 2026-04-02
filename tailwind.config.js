/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Brand lime #e8ff47 palette
        lime: {
          50:  '#fefff0',
          100: '#fcffd6',
          200: '#f6ffab',
          300: '#f0ff80',
          400: '#e8ff47',  // base
          500: '#d4ed2f',
          600: '#b8cc1e',
          700: '#8a9a14',
          800: '#5c670e',
          900: '#2e3307',
        },
        primary: {
          50:  '#fefff0',
          100: '#fcffd6',
          200: '#f6ffab',
          300: '#f0ff80',
          400: '#e8ff47',
          500: '#d4ed2f',
          600: '#b8cc1e',
          700: '#8a9a14',
          800: '#5c670e',
          900: '#2e3307',
        },
        surface: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#343a40',
            a: {
              color: '#8a9a14',
              '&:hover': {
                color: '#b8cc1e',
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [],
};
