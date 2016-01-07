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
import {AppLoader} from './components/Loader'

let socket = new Socket()
const logger = createLogger()

ReactDOM.render(
  <AppLoader />,
  document.getElementById('app')
)

socket.on('state', (state) => {
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

  socket.on('action', (action) => {
    store.dispatch(action)
  })
})
