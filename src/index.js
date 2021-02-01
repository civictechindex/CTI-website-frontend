import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider as RjssThemeProvider } from 'react-jss'
import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss'
import { JssProvider } from 'react-jss'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'

import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import themeMui from './theme-mui'

const theme = createMuiTheme(themeMui)

WebFont.load({
  google: {
    families: [
      'Work Sans:400,700',
      'Source Code Pro:400',
    ],
  },
})

const setupJss = () => {
  jss.setup(preset())

  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss.createStyleSheet(
    {
      '@global': {
        body: {
          margin: '0',
        },
      },
    }
  ).attach()

  sheetsRegistry.add(globalStyleSheet)

  return sheetsRegistry
}

const sheets = setupJss()

const themeR = {
  primaryFontFamily: 'Work Sans, san-serif',
  secondaryFontFamily: 'Space Mono, monospace',
  thirdFontFamily: 'Source Code Pro, monospace',
  primaryTextColor: 'black',
  secondaryTextColor: 'white',
  footerBG: '#242424',
  headerBG: '#D8D8D8',
  headerBG2: '#F8F8F8',
  headerCircleBG: '#F4F4F4',
  button1BG: '#0CB2E7',
  button1TextColor: 'white',
  button2BG: '#FFFFFF',
  button2TextColor: '#979797',
  backgroundColor1: '#FFFFFF',
  backgroundColor2: '#F2F2F2',
  backgroundColor3: '#E1E1E1',
  backgroundColor4: '#242424',
  backgroundColor5: '#E9E9E9',
  backgroundColor6: '#C4C4C4',
}

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RjssThemeProvider theme={themeR}>
        <JssProvider registry={sheets}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </JssProvider>
      </RjssThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister()
