/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite ease-in-out",
      },
      keyframes: {
        blob: {
          from: {
            transform: "translate(0, 0) scale(1)"
          },
          "25%": {
            transform: "translate(35px, -25px) scale(1.5)"
          },
          "50%": {
            transform: "translate(0, 0) scale(1.35)"
          },
          "75%": {
            transform: "translate(-50px, 30px) scale(0.9)"
          },
          to: {
            transform: "translate(0, 0) scale(1)"
          }
        }
      },
    },
  },
  plugins: [],
}
