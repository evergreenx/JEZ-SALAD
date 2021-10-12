module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      margin: {
        '-72': '-18rem',
       } ,
      colors: {
        primary: "#FB9333",
        'basic-black':'#575757',
        'hero-action':' #FFF0DC',
        'black-text':' #828282',
        'testimonial-bg' : '#FFF8ED',
        'menu-color' : '#585858',
        
        
      },

      fontFamily: {
        sansx: "Poppins",
      },

      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://res.cloudinary.com/evergreenx/image/upload/v1626020949/Group_8438_vfwwdj.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
