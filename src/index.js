import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'react-jss'
import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss'
import { JssProvider } from 'react-jss'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: [
      'Work Sans:400,500,700', 'sans-serif',
      'Space Mono:400,500', 'monospace',
      'Source Code Pro:400',
    ]
  }
})

const setupJss = () => {
  jss.setup(preset())

  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss.createStyleSheet(
    {
      '@global': {
        html: {
          boxSizing: 'border-box',
          margin: '0',
        },
      }
    }
  ).attach()

  sheetsRegistry.add(globalStyleSheet)

  return sheetsRegistry
}

const sheets = setupJss()

const theme = {
  primaryFontFamily: 'Work Sans, san-serif',
  secondaryFontFamily: 'Space Mono, monospace',
  thirdFontFamily: 'Source Code Pro, monospace',
  primaryTextColor: 'black',
  secondaryTextColor: 'white',
  footerBG: '#242424',
  headerBG: '#D8D8D8',
  headerBG2: '#F8F8F8',
  headerCircleBG: '#F4F4F4',
  button1BG: '#000000',
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
    <ThemeProvider theme={theme}>
      <JssProvider registry={sheets}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JssProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
