/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brutal: {
          yellow: '#FFFF00',
          pink: '#FF69B4',
          cyan: '#00FFFF',
          lime: '#32FF32',
          orange: '#FF4500',
        }
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
      }
    },
  },
  plugins: [],
}
