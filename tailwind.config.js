/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fdfdfd",
        black: "#424242",
        "main-color-nomal-blue": "#3f51b5",
        "grey-scale-dark-grey": "#878787",
      },
      spacing: {},
      fontFamily: {
        "body-h6-regular": "'Noto Sans KR'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      base: "1rem",
      sm: "0.875rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
