/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        red: {
          50: '#FDF5F5',
          100: '#FAE6E6',
          200: '#F0C7C7',
          300: '#E6A9A9',
          400: '#D78A8A',
          500: '#C86C6C',
          600: '#B94D4D',
          700: '#8B0000', // Main primary red
          800: '#780000',
          900: '#640000',
        },
        amber: {
          50: '#FEF8F0',
          100: '#FDF1E1',
          200: '#FBDCB3',
          300: '#F9C784',
          400: '#F6B256',
          500: '#F49D27',
          600: '#E38712',
          700: '#8B4513', // Main secondary brown
          800: '#703A10',
          900: '#59300D',
        },
      },
    },
  },
  plugins: [],
};