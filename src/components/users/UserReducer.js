const user = (state, action) => {
  switch(action.type) {
    case 'USER_SET_NAME':
      if (state.current) {
        return Object.assign({}, state, { name: action.name })
      } else return state
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch(action.type) {
    case 'USER_SET_NAME':
      return state.map(u => user(u, action))
    default:
      return state
  }
}

export default users
