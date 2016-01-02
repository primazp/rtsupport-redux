require('./main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import Main from './components/Main';
import Socket from './socket';
import {setState} from './action_creators';
import {remoteAction, logger} from './middleware';

let defaultStore = {
  channels: [
    {id: 0, name: 'Hardware Support'},
    {id: 2, name: 'Software Support'}
  ]
}

let socket = new Socket();
socket.on('state', state =>
  store.dispatch(setState(state))
);
socket.on('connect', () => {
  let createStoreWithMiddleware = applyMiddleware(
    remoteAction(socket),
    logger
  )(createStore);
  const store = createStoreWithMiddleware(reducer, defaultStore);

  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  );

  socket.emit('channel subscribe');
  socket.emit('user subscribe');
});
