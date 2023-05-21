/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#09EFD3",
        "100": "#FBB601",
      },
      blue: {
        "100": "#693AEE",
      },
      black: {
        "50": "#121220",
        "100": "#020003",
      },
      white: {
        "50": "#E8E8E8",
        "100": "#fff",
        "200": "#A4A7B4"
      },
      pink: {
        "100": "#D842A5",
      },
    },
    fontFamily: {
      'russo': ["'Russo One', sans-serif"],
      'inter': ["'Inter', sans-serif"],
      'opensans': ["'Open Sans', sans-serif"]
    }
  },
  plugins: [],
}
