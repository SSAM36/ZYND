/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crisis-deep': '#020617', // Slate 950
        'crisis-blue': '#06b6d4', // Cyan 500
        'crisis-red': '#ef4444',  // Red 500
        'warning-amber': '#f59e0b', // Amber 500
        'glass-bg': 'rgba(20, 20, 30, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
