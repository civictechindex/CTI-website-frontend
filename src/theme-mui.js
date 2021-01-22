/* eslint-disable sort-keys */

const BLACK = '#000000'
const BLUEBLACK = '#0F1D2F'
const CYAN = '#0CB2E7'
const GREY100 = '#F4F4F4' // MUI default grey 100 is #f5f5f5
const GREY200 = '#E9E9E9' // MUI default grey 200 is #eeeeee
const GREY300 = '#D8D8D8' // MUI default grey 300 is #e0e0e0
const GREY900 = '#242424' // MUI default grey 900 is #212121
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
    info: {
      main: CYAN,
    },
    grey: {
      100: GREY100,
      200: GREY200,
      300: GREY300,
      900: GREY900,
    },
    text: {
      primary: BLACK,
      secondary: WHITE,
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    thirdFontFamily: {
      fontFamily: 'Source Code Pro, monospace',
    },
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
