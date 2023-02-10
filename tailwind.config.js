/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./scripts/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      animation: {
        fromLeftToRight: "fromLeftToRight 1s linear 1 forwards",
        fromRightToLeft: "fromRightToLeft 1s linear 1 forwards",
      },
      keyframes: {
        fromLeftToRight: {
          from: {
            filter: "blur(33px)",
            opacity: "0",
            transform: "translate(-50%, 0)",
          },
          to: {
            filter: " blur(0)",
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },
        fromRightToLeft: {
          from: {
            filter: "blur(33px)",
            opacity: "0",
            transform: "translate(0, 50%)",
          },
          to: {
            filter: " blur(0)",
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },
      },
      fontFamily: {
        great: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
