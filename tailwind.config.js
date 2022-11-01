/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    container: { //defualt container center config 
       center: true,
       padding: '2rem', //defualt container padding center config
    },
    extend: {
      colors: {
        'guled': '#229954'
      }
    },
  },
  plugins: [],
}

