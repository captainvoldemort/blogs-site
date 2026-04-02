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
        accent: {
          DEFAULT: '#e8ff47',
          dim: '#e8ff4733',
          hover: '#f0ff80',
          dark: '#5c670e',
          text: '#2e3307',
        },
        dark: {
          bg: '#000000',
          card: '#111111',
          raised: '#191919',
          border: '#222222',
          subtle: '#0a0a0a',
        },
        muted: '#a1a1aa',
      },
      borderRadius: {
        '2xl': '16px',
        'xl': '12px',
      },
      maxWidth: {
        'site': '1280px',
      },
      spacing: {
        'section': '120px',
      },
    },
  },
  plugins: [],
};
