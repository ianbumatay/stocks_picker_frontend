
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {createStore, applyMiddleware} from 'redux'
import thunk from 'thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router} from 'react-router-dom'


const store = createStore(reducer, composeWithDevtools(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 
  document.getElementById('root')
);

