/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'ufont',
      },
      backgroundImage: {
        'logo-header': "url('../img/bg.png')",
        'bg2': "url('../img/bg-graphic-07.png')",
        'bgForm': "url('../img/bgForm.png')",
        'bgflag': "url('../img/flag.webp')",
        'bgyaroo': "url('../img/yaroo.webp')",
        'bg3': "url('../img/bg3.jpg')",
        'map': "url('../img/map.png')",
        'myGradient': "linear-gradient(-45deg, rgba(21, 10, 84, 0.471) 40%, rgba(121, 13, 13, 0.413))"
      },
      animation: {
        txt1: 'txt1 linear infinite alternate 3s',
        txt2: 'txt2 linear infinite alternate 3s',
      }
    },

  },
  plugins: [],
}