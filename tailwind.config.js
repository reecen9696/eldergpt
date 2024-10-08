module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '40px',      // Custom border-radius
        'extra-large': '32px', // Another custom border-radius
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'], // Add Noto Sans to the default sans family
      },
      minHeight: {
        'custom-50': '60px', // Custom min-height of 60px
        'custom-400': '350px', // Custom min-height of 350px
        'custom-300': '290px', // Custom min-height of 290px
        'custom-220': '220px', // Custom min-height of 220px
      },
      spacing: {
        'custom-mb': '300px', // Custom margin-bottom value
      },
      colors: {
        background: '#F9F9F9', // Added '#' for hex color code
        highlight: '#EAEAEA',  // Added '#' for hex color code
        buttons: '#6A5DFF',
        buttonslight:'#8880F8',
        font:'#2A2A2A',
        calendar:'#9A9A9A'
      },
      fontSize: {
        'title': '1.4rem',  // Custom font size for titles (1.4rem)
        'subtitle': '1.2rem',  // Custom font size for subtitles (1.2rem)
        'body-lg': '1.25rem',  // Custom large body text size (1.25rem)
        'body-sm': '0.875rem',  // Custom small body text size (0.875rem)
      },

      // Slow bounce animation for the slower pages
      keyframes: {
        'slow-bounce': {
          '0%, 100%': { transform: 'translateY(-20px)', easing: 'ease-in-out' },
          '50%': { transform: 'translateY(-40px)', easing: 'ease-in-out' },
        },

        // Fast bounce animation for the main page
        'fast-bounce': {
          '0%, 100%': { transform: 'translateY(-10px)' , easing: 'ease-in-out' },
          '50%': { transform: 'translateY(-50px)' , easing: 'ease-in-out' }, // Adjust this value for the 
        },
      },

      // Animation speeds
      animation: {
        'slow-bounce': 'slow-bounce 6s ease-in-out infinite',  // Slow bounce for 10 seconds
        'fast-bounce': 'fast-bounce 6s ease-in-out infinite',  // Slow bounce for 10 seconds
      },
    },
  },
  plugins: [],
}