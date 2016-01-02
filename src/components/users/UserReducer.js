const users = (state = [], action) => {
  switch(action.type) {
    case 'USER_SET_NAME':
      return state.map(user => {
        if (user.current) {
          return Object.assign({}, user, { name: action.name })
        } else return user
      })
    default:
      return state
  }
}

export default users
