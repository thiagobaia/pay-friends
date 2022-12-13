/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      white: {
        100: "#ffffff",
      },

      gray: {
        900: "#121214",
        800: "#202824",
        400: "#7c7c8a",
        300: "#c4c4cc",
        200: "#e1e1e6",
        100: "#F2F2F2",
      },

      cyan: {
        500: "#81d8f7",
        300: "#9BE1FB",
      },

      blue: {
        300: "#007DFE",
        400: "#0060B1",
      },

      red: {
        400: "#D63E3E",
      },

      orange: {
        500: "#FF6500",
      },
    },

    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
    extend: {
      width: {
        1504: "94rem",
      },
    },
  },
  plugins: [],
};
