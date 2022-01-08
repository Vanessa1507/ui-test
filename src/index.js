import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './App';
//Store
import { Provider } from './Store';
//Styles
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);