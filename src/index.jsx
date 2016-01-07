require('./styles/main.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import Main from './components/Main'
import Socket from './socket'
import {remoteAction} from './middleware'
import {connect} from './components/connect'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-simple-promise'
import {AppLoader} from './components/Loader'

/* SAMPLE DATA */
const defaultStore = {
  channels: [
    {id: 0, name: 'Hardware Support'},
    {id: 2, name: 'Software Support'}
  ],
  users: [
    {id: 0, name: 'Jane Doe'}
  ]
}

let socket = new Socket()
const logger = createLogger()

ReactDOM.render(
  <AppLoader />,
  document.getElementById('app')
)

socket.on('connect', (state = defaultStore) => {
  let createStoreWithMiddleware = applyMiddleware(
    remoteAction(socket),
    promiseMiddleware(),
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
