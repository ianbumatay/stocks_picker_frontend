
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router} from 'react-router-dom'

import stocksReducer from './Reducers/stocksReducer'


const store = createStore(stocksReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render( 
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById('root')
);

