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
        charcoal: {
          950: '#070809',
          900: '#0B0E10',
          850: '#101417',
          800: '#161B1E',
          700: '#22282D',
          600: '#343C42',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F3EFE8',
          300: '#E7E1D4',
          400: '#D5CCBC',
        },
        stone: {
          300: '#C8BFB0',
          400: '#AFA494',
          500: '#8E8373',
          600: '#6C6356',
        },
        forest: {
          950: '#0B130E',
          900: '#131F17',
          800: '#1C2C22',
          700: '#273D30',
          600: '#375242',
          500: '#4D6F5B',
        },
        bronze: {
          300: '#E4CFB2',
          400: '#D2B892',
          500: '#BA996E',
          600: '#9C7A4E',
          700: '#7E5F36',
        }
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      boxShadow: {
        'glow-bronze': '0 0 40px -10px rgba(186, 153, 110, 0.3)',
        'glow-emerald': '0 0 40px -10px rgba(55, 82, 66, 0.4)',
        'luxury-card': '0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 18px 36px -18px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
