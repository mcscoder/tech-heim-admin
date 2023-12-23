/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0C68F4",
        primary: {
          25: "#E4EEFE",
          50: "#AECDFB",
          75: "#78ABF9",
          100: "#428AF6",
          200: "#2779F5",
          400: "#0951BE",
          500: "#063A88",
          600: "#052E6D",
          700: "#042352",
          900: "#021736",
        },
        Secondary: "#F45E0C",
        secondary: {
          100: "#FDDBC9",
          200: "#FAB793",
          300: "#F68242",
          400: "#F45E0C",
          500: "#BE4909",
          600: "#883406",
        },
        error: "#C91433",
        errorLight: "#FAE7EB",
        success: "#198754",
        gray: {
          b4: "#B4B4B4",
          71: "#717171",
          cb: "#CBCBCB",
          d2d: "#2D2D2D",
          e9e: "#9E9E9E",
          f9f: "#F9F9F9",
          44: "#444",
        },
      },
      boxShadow: {
        1: "0px 0px 15px -1px rgba(113, 113, 113, 0.12)",
        2: "0px 0px 20px -1px rgba(113, 113, 113, 0.20)",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      gridTemplateColumns: {
        productWrapper: "repeat(auto-fill, minmax(230px, 1fr))",
      },
    },
  },
  plugins: [],
};
