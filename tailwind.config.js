/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          black:   '#07070E',
          deep:    '#0D0D1A',
          surface: '#111122',
          card:    '#141428',
        },
        gold: {
          dark:    '#8B6914',
          DEFAULT: '#C9962A',
          light:   '#D4AF61',
          bright:  '#E8C96A',
          pale:    '#F0E0A8',
        },
        silver: {
          DEFAULT: '#C8C8D8',
          light:   '#E8E8F0',
        },
        royal: '#1B3A5C',
      },
      fontFamily: {
        serif:    ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:     ['Space Grotesk', 'Inter', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-gold':  'pulseGold 3s ease-in-out infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
        'spin-slow':   'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.05)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #C9962A40, 0 0 20px #C9962A20' },
          to:   { textShadow: '0 0 20px #C9962A80, 0 0 40px #C9962A40, 0 0 60px #C9962A20' },
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient':    'linear-gradient(135deg, #8B6914 0%, #C9962A 35%, #E8C96A 60%, #C9962A 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
