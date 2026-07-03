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
          50: "#EAF3FB",
          100: "#D2E4F7",
          200: "#A8CDEF",
          300: "#7AB3E4",
          400: "#4D99D8",
          500: "#003F78", // MAIN COLOR (logo blue)
          600: "#003666",
          700: "#002B52",
          800: "#001F3D",
          900: "#001429",
        },
        balcaAccent: {
          50: "#FFF5E8",
          100: "#FFE7C4",
          200: "#FFD291",
          300: "#FFBC5E",
          400: "#FFA632",
          500: "#F28C28", // MAIN ACCENT
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
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
