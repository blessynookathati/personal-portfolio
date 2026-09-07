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
        primary: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
        secondary: {
          light: '#f1f5f9',
          dark: '#1e293b',
        },
        accent: '#38bdf8',
        card: {
          light: '#ffffff',
          dark: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-lg': '0 0 35px -5px rgba(56, 189, 248, 0.5)',
      },
    },
  },
  plugins: [],
}