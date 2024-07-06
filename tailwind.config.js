/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        avenir: "AvenirNext, sans-serif",
      },
      colors: {
        titleColor: "#262A41",
        contentTitleColor: "#273240",
        contentDescColor: "#404852",
        progressBarColor: "#31BA96",
        bodyBgColor: "#101010",
        chartBarColor: "#157AFF",
      },
    },
  },
  plugins: [],
};
