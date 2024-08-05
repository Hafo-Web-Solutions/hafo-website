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
        darkMidnightBlue: "#161620",
        opacityBlue: "rgba(36, 36, 53, 0.3412)",
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
        15: "15px",
      },
      screens: {
        // Navigation breakpoints
        "nav-lg": { min: "1158px", max: "1344px" },
        "nav-sm": { min: "769px", max: "1157px" },
        "min-w": { min: "0px", max: "639px" },
        "lg-1500": "1400px",
        "expertise-lg": { min: "1024px", max: "1200px" },
        "expertise-size": "1354px",
        "mac-size": "1400px",
        "plan-lg": { min: "1024px", max: "1157px" },
      },
      transitionProperty: {
        position: "left, bottom",
        width: "width",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.17, 0.67, 0, 1.01)",
      },
      transitionDuration: {
        700: "700ms",
      },
      translate: {
        10: "10px",
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
        // button
        ".blue-button": {
          padding: "1rem 2rem",
          color: "#ffffff",
          fontWeight: "500",
          backgroundColor: "#00A3FF",
          "&:hover": {
            backgroundColor: "#212E48",
          },
          borderRadius: "10px",
          letterSpacing: "0.5px",
          transition: "all 0.3s ease-in-out",
        },
        ".darkBlue-button": {
          padding: "1rem 2rem",
          color: "#ffffff",
          fontWeight: "500",
          backgroundColor: "#212E48",
          "&:hover": {
            backgroundColor: "#00A3FF",
          },
          borderRadius: "10px",
          letterSpacing: "0.5px",
          transition: "all 0.3s ease-in-out",
        },

        // Title
        ".default-h": {
          fontWeight: "700",
          color: "#ffffff",
          lineHeight: "1.23",
        },
        ".responsive-h1": {
          fontSize: "34px",
          "@screen sm": {
            fontSize: "36px",
          },
          "@screen md": {
            fontSize: "38px",
          },
          "@screen lg": {
            fontSize: "44px",
          },
          "@screen xl": {
            fontSize: "50px",
          },
        },
        ".responsive-h2": {
          fontSize: "28px",
          "@screen sm": {
            fontSize: "30px",
          },
          "@screen md": {
            fontSize: "32px",
          },
          "@screen lg": {
            fontSize: "36px",
          },
          "@screen xl": {
            fontSize: "40px",
          },
        },
        ".responsive-h3": {
          fontSize: "24px",
          "@screen sm": {
            fontSize: "26px",
          },
          "@screen md": {
            fontSize: "28px",
          },
          "@screen lg": {
            fontSize: "30px",
          },
          "@screen xl": {
            fontSize: "32px",
          },
        },
        ".responsive-h4": {
          fontSize: "20px",
          "@screen sm": {
            fontSize: "22px",
          },
          "@screen md": {
            fontSize: "24px",
          },
          "@screen lg": {
            fontSize: "26px",
          },
          "@screen xl": {
            fontSize: "28px",
          },
        },
        ".responsive-h5": {
          fontSize: "18px",
          "@screen sm": {
            fontSize: "20px",
          },
          "@screen md": {
            fontSize: "22px",
          },
          "@screen lg": {
            fontSize: "24px",
          },
          "@screen xl": {
            fontSize: "26px",
          },
        },
        ".responsive-h6": {
          fontSize: "16px",
          "@screen sm": {
            fontSize: "18px",
          },
          "@screen md": {
            fontSize: "20px",
          },
          "@screen lg": {
            fontSize: "22px",
          },
          "@screen xl": {
            fontSize: "24px",
          },
        },

        // Paragraphe
        ".default-p": {
          color: "#ACACAC",
          lineHeight: "28px",
        },
        ".default-bp": {
          color: "#00A3FF",
          lineHeight: "28px",
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: "1px",
        },

        // Border
        ".default-border": {
          borderColor: "#282832",
          borderRadius: "6px",
          borderWidth: "1px",
        },

        // Margin
        ".default-mt": {
          marginTop: "80px",
          "@screen lg": {
            marginTop: "100px",
          },
        },
        ".default-mb": {
          marginBottom: "80px",
          "@screen lg": {
            marginBottom: "100px",
          },
        },

        // Label
        ".default-label": {
          color: "#acacac",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "500",
        },

        // Input
        ".default-input": {
          borderRadius: "4px",
          borderColor: "#282832",
          borderWidth: "1px",
          backgroundColor: "rgba(36, 36, 53, 0.3412)",
          height: "50px",
          padding: "0 16px",
          color: "#ffffff",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "300",
          marginTop: "8px",
        },

        // Textarea
        ".default-textarea": {
          borderRadius: "4px",
          borderColor: "#282832",
          borderWidth: "1px",
          backgroundColor: "rgba(36, 36, 53, 0.3412)",
          height: "150px",
          padding: "12px 16px 0 16px",
          color: "#ffffff",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "300",
          marginTop: "8px",
        },
      };

      addUtilities(newUtilities);
    },
    function ({ addComponents }) {
      const newComponents = {
        ".default-container": {
          "@apply w-full mx-auto px-8 py-0.5": {},
        },
        ".default-focus": {
          "@apply focus:outline-none focus:ring focus:ring-secondary focus:ring-[1px]":
            {},
        },
      };

      addComponents(newComponents);
    },
  ],
};
