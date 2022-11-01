/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-foreground': 'var(--foreground)',
        // -----------------------------
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
        'th-success': 'var(--success)',
        'th-danger': 'var(--danger)',
        'th-warning': 'var(--warning)',
        'th-info': 'var(--info)',
        // -----------------------------
        'th-text-primary': 'var(--text-primary)',

      },
    },
  },
  variants: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
