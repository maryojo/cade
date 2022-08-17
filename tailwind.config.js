/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-two': "url('https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg')",
      },
    },
  },
  plugins: [],
}
