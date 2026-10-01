/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // deep blue
        card: '#1e293b',
        primary: '#38bdf8', // neon blue accent
        secondary: '#818cf8', // neon purple accent
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
      }
    },
  },
  plugins: [],
}