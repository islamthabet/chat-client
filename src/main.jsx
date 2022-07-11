import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import {ToastContainer} from 'react-toastify';
import 'primereact/resources/themes/lara-light-teal/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import {store} from './core/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer limit={5} position='top-right' />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
