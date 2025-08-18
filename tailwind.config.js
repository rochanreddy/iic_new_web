/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        showcase: {
          '0%, 100%': { opacity: '0.9', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-2px)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        showcase: 'showcase 3s ease-in-out infinite',
        shine: 'shine 1.75s linear infinite',
      },
    },
  },
  plugins: [],
};
