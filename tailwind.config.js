/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#061329",
          navy: "#0b1b3d",
          blue: "#2563eb",
          lightBlue: "#3b82f6",
          accent: "#00f0ff",
          bgLight: "#f4f8ff",
          border: "#dbeafe"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(37, 99, 235, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
