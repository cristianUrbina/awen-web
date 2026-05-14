/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "servicios.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        ayma: {
          50: "#FDECEA",
          100: "#F9D0C9",
          300: "#EB725D",
          500: "#C92D15", // MAIN COLOR (rojo AYMA)
          600: "#A52411",
          700: "#811C0D",
        },
        steel: {
          50: "#E9EDF3",
          100: "#CFD8E6",
          200: "#9FB1CD",
          300: "#6F8BB4",
          400: "#3F659B",
          500: "#1F4A85",
          600: "#183A68",
          700: "#122B4C",
          800: "#0B1C30",
          900: "#050D14",
          950: "#02070D",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
