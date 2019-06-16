import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const mainFontStack = `'Source Sans Pro', sans-serif`;
const appBackgroundColor = '#fafafa';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    *, *:before, *:after {
      box-sizing: inherit;
    }
  }

  body {
    background: ${appBackgroundColor};
    font: 100% ${mainFontStack};
    text-align: center;
  }
  
  /* other styles go here */
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
