/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#443371',
        secondary: '#D15875',
        accent: '#F98465',
      },
    },
  },
  plugins: [],
};
