export const remoteAction = socket => store => next => action => {
  if (action.meta && action.meta.server) {
    console.log('emit action', action)
    socket.emit('action', action)
    return store.getState()
  } else return next(action)
}
