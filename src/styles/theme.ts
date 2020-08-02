const colors = {
  dark100: 'hsl(0, 0%, 10%)',
  dark200: 'hsl(0, 0%, 15%)',

  light: 'hsl(0, 0%, 90%)',
  gray: 'hsl(0, 0%, 70%)',
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
      l: '2.4rem',
    },
  },

  borderRadius: '5px',
};

export default theme;
