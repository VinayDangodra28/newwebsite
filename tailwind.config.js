/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F0EBE0',
        black: '#0A0A0A',
        red: '#FF2800',
        blue: '#0028FF',
        lime: '#C8FF00',
        teal: '#00C8A0',
        orange: '#FF7A00',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(72px, 12vw, 160px)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
        'xl': ['clamp(48px, 6vw, 80px)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '900' }],
        'lg': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'md': ['clamp(18px, 2vw, 24px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.75', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.2', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '500' }],
      },
      maxWidth: {
        'container': '1440px',
      },
    },
  },
  plugins: [],
}