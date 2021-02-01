module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Lato, sans-serif',
    },
    extend: {
      height: {
        fc: 'fit-content',
      },
      borderWidth: {
        '1.5px': '0.094rem',
      },
      spacing: {
        13: '3.25rem',
        46: '11.5rem',
        58: '14.5rem',
        130: '32.5rem',
      },
      gridTemplateColumns: {
        news: 'auto repeat(4,minmax(0,1fr))',
      },
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      black: '#000000',
      white: '#FFF',
      gray: '#737897',
      blue: {
        300: '#9196B7',
        30002: 'rgba(150, 145, 183, 0.2)',
        500: '#487FD9',
        700: '#2E324E',
        800: '#22263E',
        900: '#282B3E',
      },
      blueGray: {
        700: '#383C56',
      },
      mariner: {
        500: '#78CBBB',
        50005: 'rgba(120, 203, 187, 0.05)',
        50040: 'rgba(120, 203, 187, 0.4)',
        600: '#6ba5a0',
        700: '#468a94',
        900: '#425968',
      },
      red: {
        300: '#FF3165',
        500: '#F44042',
        900: '#40344B',
        50005: 'rgba(244, 64, 66, 0.05)',
        50040: 'rgba(244, 64, 66, 0.4)',
      },
      yellow: {
        500: '#F5B333',
        700: '#B98C3B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}