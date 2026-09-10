/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#111111',
          panel: '#181818',
          secondary: '#202020',
          border: '#303030',
          text: '#F5F5F5',
          muted: '#AAAAAA',
          accent: '#4F8CFF',
          accentHover: '#3d79ed',
          danger: '#FF4D4D',
          warning: '#FFAA00',
          success: '#00D084',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Consolas', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
