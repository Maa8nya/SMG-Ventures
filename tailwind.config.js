/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    glow: 'glow 1.5s ease-in-out infinite alternate',
  },
  keyframes: {
    glow: {
      '0%': { filter: 'drop-shadow(0 0 10px #ff4d4d)' },
      '100%': { filter: 'drop-shadow(0 0 30px #ff8080)' },
    },
  },
},

  },
  plugins: [],
}

