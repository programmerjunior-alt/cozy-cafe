const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'cafe-brown': '#6F4E37',
        'cafe-cream': '#F5EBDD',
        'cafe-coffee': '#4B2E2B',
        'cafe-orange': '#D97706',
      },
      keyframes: {
        fontFamily: {
          sans: ['Nunito', ...fontFamily.sans],
          'nunito': ['Nunito', 'sans-serif'],
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
