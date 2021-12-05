module.exports = {
  mode: 'jit',
  // EXPERIMENTAL BELOW
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // EXPERIMENTAL ABOVE
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '325px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
      montserrat: ['Montserrat', 'sans'],
      reenieBeanie: ['Reenie Beanie', 'sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
