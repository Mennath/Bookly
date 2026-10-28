/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plum: "#382b43",
        ink: "#241b2b",
        rose: "#d52a78",
        blush: "#f9edf3",
        muted: "#827987"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 35px rgba(38, 25, 44, .08)"
      }
    },
  },
  plugins: [],
};
