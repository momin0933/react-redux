import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
<<<<<<< Updated upstream:react-redux-app/src/index.js
import { Provider } from 'react-redux';
import store from './redux/store/Store';
=======
import store from './redux/store/store';
>>>>>>> Stashed changes:src/index.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream:react-redux-app/src/index.js
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
=======
  <React.StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
   
>>>>>>> Stashed changes:src/index.js
  </React.StrictMode>
);

