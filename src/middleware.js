export const remoteAction = socket => store => next => action => {
  if (action.target !== 'local') {
    socket.emit('action', action)
  }
  return next(action)
}
