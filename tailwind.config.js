module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "-72": "-18rem",
      },
      colors: {
        primary: "#FB9333",
        "basic-black": "#575757",
        "hero-action": " #FFF0DC",
        "black-text": " #828282",
        "testimonial-bg": "#FFF8ED",
        "menu-color": "#585858",
      },

      fontFamily: {
        sansx: "Poppins",
      },

      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://res.cloudinary.com/evergreenx/image/upload/v1626020949/Group_8438_vfwwdj.svg')",

        "newsletter-bg":
          "url('https://res.cloudinary.com/evergreenx/image/upload/v1644278373/Group_8441_ftmfcu.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
