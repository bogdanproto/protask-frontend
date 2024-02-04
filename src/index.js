import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { persistor, store} from 'redux/store';
// import {store} from "./components/Header/Redax/store"
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'globalStyles/GlobalStyle';
import * as theme from 'globalStyles/index';
import 'data/fonts/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme.themeBlack}>
          <BrowserRouter>
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
