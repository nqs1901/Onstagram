import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import './styles/global.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import DataProvider from './redux/store'
import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';

const mountNode = document.getElementById('root');
// Used to log in if token is valid
store.dispatch(verifyToken());


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  // </React.StrictMode>,
  mountNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
