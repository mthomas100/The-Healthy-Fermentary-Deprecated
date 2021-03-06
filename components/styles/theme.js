export default {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'blue',
      display: 'block',
      width: `100%`,
    },
    business: {
      color: 'white',
      bg: 'black',
      display: 'block',
      width: `100%`,
    },
    danger: {
      color: 'white',
      bg: 'tomato',
      display: 'block',
      width: `100%`,
      paddingTop: 2,
      paddingBottom: 2,
      marginTop: 2,
      marginBottom: 2,
    },
    minimalistic: {
      color: 'black',
      border: '1px solid black',
      fontFamily: "'Pathway Gothic One', sans-serif;",
      fontSize: '20px', // maybe better specified in tag
      lineHeight: '20px',
      letterSpacing: '1px',
      backgroundColor: 'transparent',
      borderRadius: '0px',
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
      display: 'block',
      width: `100%`,
    },
    bottomBar: {
      border: '1px solid black',
      fontFamily: "'Pathway Gothic One', sans-serif;",
      fontSize: [3],
      lineHeight: ['12px', '14px', '14px', '20px'],
      letterSpacing: '1px',
      backgroundColor: 'transparent',
      borderRadius: '0px',
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
      minWidth: 'fit-content',
    },
  },
};
