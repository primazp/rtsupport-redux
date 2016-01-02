const channel = (state, action) => {
  switch(action.type) {
    case 'CHANNEL_ADD':
      return {
        id: action.id,
        name: action.name,
        completed: false
      }
    case 'CHANNEL_SET_ACTIVE':
      return Object.assign({}, state, { active: state.id === action.id })
    default:
      return state
  }
}

const channels = (state = [], action) => {
  switch(action.type) {
    case 'CHANNEL_ADD':
      return [
        ...state,
        channel(undefined, action)
      ]
    case 'CHANNEL_SET_ACTIVE':
      return state.map(c => channel(c, action))
    case 'CHANNEL_REMOVE':
      return state.filter(c => c !== action.channel)
    default:
      return state
  }
}

export default channels
