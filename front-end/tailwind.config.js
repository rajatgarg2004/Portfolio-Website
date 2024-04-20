/** @type {import('tailwindcss').Config} */
// In your CSS/SCSS file


module.exports = {
  theme: {
    extend: {
      colors: {
        'green-rgba-lightest' : 'rgba(127, 255, 200,0.6)',
        'green-rgba-lighter': 'rgba(127, 255, 200,0.7)',
        'green-rgba-light': 'rgba(127, 255, 200,0.8)',
        'green-rgba-dark': 'rgba(107, 235, 180, 0.8)',
        'green-rgba-darkest': 'rgba(107, 235, 180, 0.8)',
        'neon-hex':'#00FF00',
        'aqua' : '#00ffff',
        'cool-color':'rgba(0, 0, 128, 0.9) '
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        // Add more font families as needed
      },
    },
  },
  purge: [
      './src/**/*.html',
      './src/**/*.js',
      // Add any other files that contain Tailwind classes
  ],
  // Other Tailwind configuration...
};

