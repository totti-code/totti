/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          bright: '#00f0ff',
          dim: '#0099bb',
        },
        dark: {
          950: '#010408',
          900: '#020810',
          800: '#050f1a',
          700: '#071523',
          600: '#0a1d2e',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'monospace'],
        body: ['"Rajdhani"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.15)',
        'neon-sm': '0 0 10px rgba(0, 212, 255, 0.4), 0 0 30px rgba(0, 212, 255, 0.1)',
        'neon-lg': '0 0 40px rgba(0, 212, 255, 0.6), 0 0 100px rgba(0, 212, 255, 0.2)',
        glass: '0 8px 32px rgba(0, 212, 255, 0.08), inset 0 0 0 1px rgba(0, 212, 255, 0.1)',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 5s infinite',
        'type': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 10px #00d4ff, 0 0 30px #00d4ff, 0 0 60px #00d4ff' },
          '50%': { textShadow: '0 0 20px #00f0ff, 0 0 60px #00f0ff, 0 0 120px #00f0ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
