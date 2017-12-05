import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './components/App'

//import 'dropzone/dist/min/dropzone.min.js';

//css
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

//Authentication
import { setCurrentUser } from './actions/authActions';

const target = document.querySelector('#root');

if (localStorage.token) {
  store.dispatch(setCurrentUser(JSON.parse(localStorage.token)));
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  target
)
