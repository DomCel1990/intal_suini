/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Questo dice ad Angular di analizzare tutti i file per generare solo il CSS che usi davvero
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#0A0809',
          card: '#161315',
          cardHover: '#201A1D',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#AA7C11',
          burgundy: '#5B1422',
          textMuted: '#A39E93'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}