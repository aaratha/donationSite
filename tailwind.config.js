/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': 'rgb(5, 5, 5)',
        'bg': 'rgb(250, 250, 250)',
        'primary': 'rgb(0, 255, 183)',
        'secondary': 'rgb(209, 219, 250)',
        'accent': 'rgb(18, 73, 237)',
        'darktext': 'rgb(250, 250, 250)',
        'darkbg': 'rgb(5, 5, 5)',
        'darkprimary': 'rgb(0, 255, 183)',
        'darksecondary': 'rgb(5, 15, 46)',
        'darkaccent': 'rgb(113, 146, 244)',
      },
    },
  },
  plugins: [],
}
