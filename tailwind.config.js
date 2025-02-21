/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFBF6",
        logo: "#EFFF76",
        text: "#000000",
        color_violeta: "#CDD3FF",
        color_green: "#D6FFBA",
        color_orange: "#FFCF76",
        color_pink: "#FEA3E7",
        color_yellow: "#FCFFE9",
        color_green2: "#CFF4BC",
        color_pink2: "#F5B0FD",
        color_yellow2: "#F5FFBC",
        color_peach: "#FFC4C4",
        color_violeta3: "#BDABFF",
        color_sky: "#DFFFFA",
        color_grey: "#D9D9D9",
        color_orange2: "#FFC862",
        color_pink3: "#FF7EDF",
        color_sky2: "#51F0F8",
        color_dark_yellow: "#A1A86D",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        sans: ["InterVariable", "...defaultTheme.fontFamily.sans"],
      },
    },
  },
  plugins: [],
};
