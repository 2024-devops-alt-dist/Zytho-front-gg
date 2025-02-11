/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Désactive le reset global de Tailwind
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Définir la police par défaut comme "sans"
      },
    },
  },
  plugins: [],
};
