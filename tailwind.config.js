/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        accent: '#F59E0B',
        charcoal: '#111827',
        soft: '#F9FAFB'
      },
      fontFamily: {
        serif: ['"Merriweather"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
}

