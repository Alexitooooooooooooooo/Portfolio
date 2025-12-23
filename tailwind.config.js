/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#181f2a', // fondo principal
        'portfolio-panel': '#232b3a', // paneles o tarjetas
        'portfolio-accent': '#64ffda', // acento
        'portfolio-text': '#e6f1ff', // texto principal
        'portfolio-muted': '#8892b0', // texto secundario
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
