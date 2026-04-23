/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        awen: {
            50:  '#EAF1F8',
            100: '#D5E3F1',
            300: '#8FB4D9',
            500: '#3B6EA5',   // MAIN COLOR
            600: '#2F5E8E',
            700: '#244A6F',
          }
        }
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
