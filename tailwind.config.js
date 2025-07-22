
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 1.2s ease-out both',
      },
      keyframes: {
        fadeSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, 20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, 0)',
          },
        }
      }



    },
  },
  plugins: [],
};
