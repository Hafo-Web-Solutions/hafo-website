/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./assets/**/*.js", "./templates/**/*.html.twig"],
  theme: {
    extend: {
      colors: {
        primary: "#171721",
        secondary: "#00A3FF",
        tertiary: "#212E48",
        quaternary: "#191925",
        quinternary: "#1B1B28",
        grayText: "#ACACAC",
        whiteTransparency: "rgba(255, 255, 255, 0.00784)",
        borderBase: "#282832",
        dark: "#1D1D1D",
        customBlack: "rgba(0, 0, 0, 0.8)",
        darkBlue: "#242435",
        darkMidnightBlue: "#151521",
      },
      boxShadow: {
        "3xl": "0 0 15px rgba(0,0,0,.15)",
      },
      padding: {
        paddingBase: "12.166%",
        paddingDemi: "6.083%",
        100: "100px",
        50: "50px",
      },
      margin: {
        marginBase: "12.166%",
        marginDemi: "6.083%",
        100: "100px",
        50: "50px",
      },
      fontSize: {
        '15': '15px',
      },
      screens: {
        // Navigation breakpoints
        "nav-lg": { min: "1158px", max: "1344px" },
        "nav-sm": { min: "769px", max: "1157px" },
        "nav-min": { min: "0px", max: "639px" },
        "lg-1500": "1400px",
      },
      transitionProperty: {
        position: "left, bottom",
        width: "width",
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.17, 0.67, 0, 1.01)',
      },
      transitionDuration: {
        '700': '700ms',
      },
      translate: {
        '10': '10px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "@media (max-height: 723px)": {
          ".static-on-small-screen": {
            position: "static",
          },
        },
      };

      addUtilities(newUtilities);
    },
    function ({ addComponents }) {
      const newComponents = {
        ".default-container": {
          "@apply w-full mx-auto px-8 py-0.5": {},
        },
      };

      addComponents(newComponents);
    },
  ],
};
