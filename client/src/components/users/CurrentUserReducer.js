export function setUserName(name) {
  return {
    meta: {
      server: true
    },
    type: 'CURRENT_USER_SET_NAME',
    name
  }
}

const defaultUser = {
  id: 1,
  current: true,
  name: 'Anonymous'
}

const reducer = (state = defaultUser, action) => {
  switch(action.type) {
    case 'CURRENT_USER_SET_NAME':
      return Object.assign({}, state, { name: action.name })
    default:
      return state
  }
}

export default reducer
