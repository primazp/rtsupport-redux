const channel = (state, action) => {
  switch(action.type) {
    case 'CHANNEL_SET_ACTIVE':
      return Object.assign({}, state, { active: state.id === action.id })
    default:
      return state
  }
}

const channels = (state = [], action) => {
  switch(action.type) {
    case 'CHANNEL_ADD':
      if(state.find(c => c.name === action.channel.name)) {
        return state;
      } else {
        return [
          ...state,
          action.channel
        ]
      }
    case 'CHANNEL_SET_ACTIVE':
      return state.map(c => channel(c, action))
    case 'CHANNEL_REMOVE':
      return state.filter(c => c !== action.channel)
    default:
      return state
  }
}

export default channels
