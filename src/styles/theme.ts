const colors = {
  dark: 'hsl(0, 0%, 10%)',
  light: 'hsl(0, 0%, 90%)',

  green: 'hsl(107, 81%, 51%)',
};

const theme = {
  ...colors,

  font: {
    weight: {
      regular: '400',
      bold: '700',
    },
    size: {
      s: '1.3rem',
      m: '1.6rem',
    },
  },

  borderRadius: '5px',
};

export default theme;
