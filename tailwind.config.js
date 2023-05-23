module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
        // Agregar colores personalizados para el modo oscuro
        dark: {
          primary: "#f3f4f6",
          secondary: {
            100: "#F9FAFB",
            900: "#D1D5DB",
          },
        },
      },
    },
  },
  plugins: [],
};
