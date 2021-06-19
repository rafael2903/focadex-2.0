import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';

const theme = {
  backgroundColors: {
    bug: '#7ED578',
    electric: '#FFF34B',
    fairy: '#FF7EE5',
    fighting: '#F17373',
    fire: '#FFB433',
    flying: '#D7F1E9',
    ghost: '#E2E2E2',
    grass: '#5EFF53',
    ground: '#AA8546',
    ice: '#AEE3FB',
    normal: '#D7DBA8',
    poison: '#CE52F9',
    psychic: '#FFC157',
    rock: '#757575',
    steel: '#A1A1A1',
    water: '#7192FF',
    dragon: '#43372D'
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
