/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'elite': ['Special Elite', 'cursive', 'sans-serif'],
        'calc': ['Digital-7', 'sans-serif'],
      },
      backgroundImage: {
        'bg-webp': "url('/img/jack_yolo_odissey-bg.webp')",
        'bg': "url('/img/jack_yolo_odissey-bg.jpg')",
      }
    },
  },
  plugins: [],
}
