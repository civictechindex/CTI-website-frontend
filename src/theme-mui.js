/* eslint-disable sort-keys */

const BLUEBLACK = '#0F1D2F'
const WHITE = '#FFFFFF'
const YELLOW = '#FFE06D'

const theme = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontStyle: 'normal',
          margin: 0,
        },
      },
    },
  },
  MuiChip: {
    root: {
      cursor: 'pointer',
      margin: '5px',
    },
  },
  palette: {
    primary: {
      main: BLUEBLACK,
    },
    secondary: {
      main: YELLOW,
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    h1: {
      color: YELLOW,
      fontSize: '42px',
      fontWeight: '700',
      letterSpacing: '0px',
      lineHeight: '48px',
      marginBottom: '0.825em',
      marginTop: '0.825em',
    },
    h2: {
      color: YELLOW,
      fontFamily: 'Work Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '38px',
      marginBottom: '0.825em',
      marginTop: '0.825em',
    },
    h5: {
      color: WHITE,
      fontFamily: 'Work Sans',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
      marginBottom: '1.675em',
      marginTop: '1.675em',
      textAlign: 'left',
    },
  },
}

export default theme
