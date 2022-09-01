/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      fontSize: {
        xss: "10px",
        14: "14px",
      },
      backgroundColor: {
        "primary-light-bg": "#FAFBFB",
        "primary-dark-bg": "#20232A",
        "secondary-light-bg": "",
        "secondary-dark-bg": "#33373E",
        "transparent-light": "rgba(255,255,255,0.5)",
        "transparent-dark": "rgba(0,0,0,0.5)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1280: "1280px",
        1400: "1400px",
      },
      height: {
        "screen-50": "50vh",
        "screen-75": "75vh",
        "screen-85": "85vh",
      },
      minHeight: {
        16: "4rem",
        64: "16rem",
        "screen-3/4": "75vh",
        "screen-50": "50vh",
        "screen-75": "75vh",
        "screen-85": "85vh",
        "screen-90": "90vh",
      },
      maxWidth: {
        15: `15rem`,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
