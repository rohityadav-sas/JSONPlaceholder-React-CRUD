/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#17153B',
        primary: '#2E236C',
        secondary: "#C8ACD6",
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      boxShadow: {
        'outline-blue': '0 0 0 0.3rem rgba(0, 123, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
