/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#28a4a8",
        text: "#013047",
        text_hover: "#092939",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
