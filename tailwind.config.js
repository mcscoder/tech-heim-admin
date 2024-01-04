/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: {
          Normal: "#E7E7E3",
          Dark: "#232321",
          Main: "#70706E",
          Medium: "#A6A6A6",
        },
        White: {
          FA: "#FAFAFA",
        },
        Blue: "#4A69E2",
        Yellow: "#FFA52F",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
