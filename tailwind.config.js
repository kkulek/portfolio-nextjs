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
        "bottom-layer": "url('../public/layered-waves.svg')",
        "icon-github": "url('../public/img/icons/github.svg')",
        "icon-cv": "url('../public/img/icons/cv.svg')",
        "icon-mail": "url('../public/img/icons/mail.svg')",
        "icon-phone": "url('../public/img/icons/phone.svg')",
        "icon-codewars": "url('../public/img/icons/codewars.svg')",
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        smallRotate: "smallRotate 200ms linear",
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
        },
        smallRotate: {
          from: {
            transform: "rotate(0)"
          },
          "25%": {
            transform: "rotate(25deg)"
          },
          "50%": {
            transform: "rotate(0)"
          },
          "75%": {
            transform: "rotate(-25deg)"
          },
          to: {
            transform: "rotate(0)"
          },
        }
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    }
  },
  plugins: [],
}
