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
        noir: {
          950: '#050A07', // Deepest Obsidian
          900: '#070E0B', // Base Canvas Velvet
          850: '#0B1511', // Dark Surface Plinth
          800: '#0E1D16', // Smoked Glass Card Base
          750: '#12241C', // Hover Card Plinth
          700: '#172C22', // Subtle Elevated Border
          600: '#1E382C', // Muted Deep Emerald
        },
        gold: {
          50: '#FAF6EA',
          100: '#F5ECDA',
          200: '#EBD8B1',
          300: '#E1C488',
          400: '#D4AF37', // 24K Royal Gold
          500: '#B89047', // Warm Architectural Gold
          600: '#9E782F', // Burnished Antique Gold
          700: '#7E5F22',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        champagne: '#F3E5AB',
        alabaster: {
          50: '#FFFFFF',
          100: '#FAF9F5', // Luminous White Text
          200: '#EFECE6', // Soft Off-White
          300: '#D8D4CA', // Muted Off-White
        },
        sage: {
          100: '#E2EBE6',
          200: '#C5D6CD',
          300: '#98AEA2', // Subtle Muted Sage
          400: '#738C80',
          500: '#5A7065',
        },
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
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.25)',
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.15)',
        'luxury-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.35)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'card-noir': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.15)',
        'dark-card': '0 16px 36px -12px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
