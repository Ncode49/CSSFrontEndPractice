module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "745px",
      // => @media (min-width: 960px) { ... }
      desktop: "1115px",
      desktopplus: "1230px",
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
