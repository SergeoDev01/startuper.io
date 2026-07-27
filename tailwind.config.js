/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-lg)',
        '3xl': 'var(--radius-xl)',
      },
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          foreground: 'rgba(255,255,255,0.6)',
        },
        input: 'rgba(255,255,255,0.06)',
        primary: {
          DEFAULT: '#FF4202',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Halvers', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Halvers', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
