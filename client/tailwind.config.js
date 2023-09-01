/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/bgimage.jpg')",
        "background" : "url('/src/Assets/back.png')"
      },
    },
  },
  plugins: [],
};
