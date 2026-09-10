/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Specified Quiet-Luxury Architectural Palette
        ivory: {
          50: '#FAF9F6',
          100: '#F7F6F2', // Warm Ivory Base
          200: '#EFECE6',
          300: '#E5E1D8',
          400: '#DDD8CE',
        },
        stone: {
          50: '#F4F2EB',
          100: '#E7E4DD', // Soft Stone
          200: '#D8D4CA',
          300: '#C7C2B6',
          400: '#AEA89B',
          500: '#948D80',
        },
        forest: {
          950: '#0E1F17',
          900: '#122E23',
          800: '#183C2F', // Deep Forest Green (Primary)
          700: '#234C3C',
          600: '#315F4C',
          500: '#437660',
          400: '#5E927A',
          300: '#8EAE9E',
        },
        charcoal: {
          950: '#0E1310',
          900: '#17201C',
          800: '#1D2421', // Dark Charcoal (Primary Text)
          700: '#2A332F',
          600: '#3D4944',
          500: '#5A6862',
          400: '#7B8983',
          300: '#A4B0AA',
        },
        sand: {
          100: '#F5EFE8',
          200: '#E8DED1',
          300: '#D8C8B5',
          400: '#C8B49B',
          500: '#B8A58A', // Warm Sand
          600: '#A49075',
          700: '#8A775E',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"DM Serif Display"', 'serif'],
        editorial: ['"Cormorant Garamond"', '"DM Serif Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        architectural: '.22em',
        widest: '.25em',
        ultra: '.32em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(29, 36, 33, 0.04)',
        'luxury': '0 10px 30px -10px rgba(23, 32, 28, 0.08), 0 4px 12px -4px rgba(23, 32, 28, 0.03)',
        'luxury-hover': '0 20px 40px -15px rgba(23, 32, 28, 0.12), 0 8px 20px -6px rgba(49, 72, 61, 0.06)',
        'dark-card': '0 16px 36px -12px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
