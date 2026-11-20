/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#38BDF8',
          400: '#0EA5E9',
          500: '#0095FF',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        navy: {
          50: '#EEF3FA',
          100: '#D4E0F2',
          200: '#A6BCE0',
          300: '#7193C7',
          400: '#426BA8',
          500: '#214882',
          600: '#102C59',
          700: '#0B1F40',
          800: '#071326',
          900: '#040B17',
        },
        accent: {
          100: '#FEF9C3',
          400: '#FACC15',
          500: '#F59E0B',
        },
        success: {
          500: '#16A34A',
          600: '#15803D',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#DC2626',
          600: '#B91C1C',
        },
        offwhite: '#F4F7FB',
        graphite: '#0F172A',
      },
    },
  },
  plugins: [],
};