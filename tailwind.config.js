/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(/src/assets/code-mockup.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        green: {
          300: '#FC3300',
          500: '#FC3300',
          700: '#FC3300',
        },
        blue: {
          900: '#332DE6',
          950: '#221ea5',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    }
  },
  plugins: [],
}
