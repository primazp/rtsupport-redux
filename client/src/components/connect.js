export function connect(status) {
  return {
    type: 'CONNECT',
    status
  }
}

export function connected(state = false, action) {
  switch (action.type) {
    case 'CONNECT':
      return action.status
    default:
      return state
  }
}
