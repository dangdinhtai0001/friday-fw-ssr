/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
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
  plugins: [],
};