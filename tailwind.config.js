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
        hero: 'url("/bg-palestra.png")',
        backgroung: 'url("/bg-palestra-2.jpeg")',
        'background-2': 'url("/bg-palestra3.png")',
      },

      fontFamily: {
        sans: 'Roboto, sans-serif',
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
          900: '#09090A',
        },
      },

      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
        alert: 'alert 0.4s ease-in-out',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        alert: {
          '0%': { top: '-100%', scale: '0' },
          '100%': { top: '0%', scale: 'transform-none' },
        },
      },
    },
  },
  plugins: [],
}
