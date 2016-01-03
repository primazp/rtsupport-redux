require('./main.css')

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import Main from './components/Main'
import Socket from './socket'
import {remoteAction, logger} from './middleware'
import {connect} from './components/connect'

/* SAMPLE DATA */
const defaultStore = {
  channels: [
    {id: 0, name: 'Hardware Support'},
    {id: 2, name: 'Software Support'}
  ],
  users: [
    {name: 'Anonymous', id: 1, current: true}
  ]
}

let socket = new Socket()

socket.on('connect', (state = defaultStore) => {
  let createStoreWithMiddleware = applyMiddleware(
    remoteAction(socket),
    logger
  )(createStore)
  const store = createStoreWithMiddleware(reducer, state)
  store.dispatch(connect(true))

  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  )

  socket.emit('CHANNEL_SUBSCRIBE')
  socket.emit('USER_SUBSCRIBE')
})

socket.on('action', (action) => {
  console.debug('action from server', action)
  // store.dispatch(action)
})
