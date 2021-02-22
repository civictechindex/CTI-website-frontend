import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import * as serviceWorker from './serviceWorker';
import themeMui from './theme-mui';

const theme = createMuiTheme(themeMui);

WebFont.load({
  google: {
    families: ['Work Sans:400,700', 'Source Code Pro:400'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */

serviceWorker.unregister();