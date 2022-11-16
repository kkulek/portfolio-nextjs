/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prm-dark': "#001220",
        'palette': {
          0: "#F46393FF",
          1: "#8866D3",
          2: "#1DA1F2",
          3: "#F2DDCAFF",
          4: "#4721C4FF",
          5: "#702d76",
          6: "#37C890FF",
          7: "#F26818FF"
        },
      },
      backgroundColor: {
        'palette': {
          0: "#F46393FF",
          1: "#8866D3",
          2: "#1DA1F2",
          3: "#F2DDCAFF",
          4: "#4721C4FF",
          5: "#702d76",
          6: "#37C890FF",
          7: "#F26818FF"
        },
      },
      backgroundImage: {
        "bottom-layer": "url('../public/layered-waves.svg')"
      },
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
