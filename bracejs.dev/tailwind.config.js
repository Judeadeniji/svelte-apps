/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark:fill-white", "fill-coal-800"],
  theme: {
    extend: {
      colors: {
        white: "#fefefe",
        primary: "#23272F", // gray-90
        "primary-dark": "#F6F7F9", // gray-5
        secondary: "#404756", // gray-70
        "secondary-dark": "#EBECF0", // gray-10
        tertiary: "#5E687E", // gray-50
        "tertiary-dark": "#99A1B3", // gray-30
        link: "#087EA4", // blue-50
        "link-dark": "#149ECA", // blue-40
        syntax: "#EBECF0", // gray-10
        wash: "#FFFFFF",
        "wash-dark": "#23272F", // gray-90
        card: "#F6F7F9", // gray-05
        "card-dark": "#343A46", // gray-80
        highlight: "#E6F7FF", // blue-10
        "highlight-dark": "rgba(88,175,223,.1)",
        border: "#EBECF0", // gray-10
        "border-dark": "#343A46", // gray-80
        "secondary-button": "#EBECF0", // gray-10
        "secondary-button-dark": "#404756", // gray-70
        reactblue: {
          80: "#043849",
          50: "#149ECA", //,brand
        },
        turpentine: {
          100: "#111828",
          200: "#202938",
          300: "#384152",
          text: "#8a919e",
        },
        svelte: "#ef552f",
        sunshine: {
          900: "#b9761f", // brightest
          800: "#d39226",
          700: "#e3a12a",
          600: "#f1b02e",
          500: "#f9ba32",
          400: "#ffbf3d",
          300: "#ffd864",
          200: "#ffe99e",
          100: "#fff8d6",
          50: "#fffdf2",
        },
        steelblue: {
          900: "#1e304f", // brightest
          800: "#293f68",
          700: "#314e80",
          600: "#3b5d97",
          500: "#426ea6",
          400: "#6c85a9",
          300: "#97a7c1",
          200: "#c0ccd9",
          100: "#e6ebf0",
          50: "#f5f7f9",
        },
        bone: {
          900: "#7c7662", // brightest
          800: "#9c937b",
          700: "#c0b39f",
          600: "#e4d4c4",
          500: "#f8f1e5",
          400: "#f3dd9f",
          300: "#f6e6b6",
          200: "#faf2d2",
          100: "#fdfbed",
          50: "#fefdf9",
        },
        coal: {
          900: "#111212", // brightest
          800: "#191a1a",
          700: "#212323",
          600: "#292b2b",
          500: "#2f3131",
          400: "#7e7e7e",
          300: "#a2a2a2",
          200: "#c4c4c4",
          100: "#e6e6e6",
          50: "#f6f6f6",
        },
        // MISC
        "code-block": "#99a1b30f", // gray-30 @ 6%
        "gradient-blue": "#58C4DC", // Only used for the landing gradient for now.
        github: {
          highlight: "#fffbdd",
        },
      },
      backgroundImage: {
        "gradient-left-dark":
          "conic-gradient(from 90deg at -10% 100%, #384152 0deg, #384152 90deg, #202938 360deg)",
        "gradient-right-dark":
          "conic-gradient(from -90deg at 110% 100%, #384152 0deg, #202938 90deg, #202938 360deg)",
        "gradient-left":
          "conic-gradient(from 90deg at -10% 100%, #BCC1CD 0deg, #BCC1CD 90deg, #FFFFFF 360deg)",
        "gradient-right":
          "conic-gradient(from -90deg at 110% 100%, #FFFFFF 0deg, #EBECF0 90deg, #EBECF0 360deg)",
        "meta-gradient": "url('/images/meta-gradient.png')",
        "meta-gradient-dark": "url('/images/meta-gradient-dark.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
