export const remoteAction = socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}

export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
