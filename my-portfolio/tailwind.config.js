module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lekton: ['Lekton', 'sans-serif']
      },
      colors: {
        "dark-primary" : "#222222",
        "txt-clr": "rgba(255, 255, 255, 0.55)"
      },
      spacing: {
        '72px': '72px',
<<<<<<< HEAD
        '128': '35rem'
=======
        '128': '73rem'
>>>>>>> cab5e66 (home)
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

