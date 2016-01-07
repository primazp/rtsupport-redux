const message = (state, action) => {
  switch(action.type) {
    case 'MESSAGE_ADD':
      return {
        id: action.id,
        body: action.body,
        author: action.author,
        createdAt: new Date()
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch(action.type) {
    case 'MESSAGE_ADD':
      return [
        ...state,
        message(undefined, action)
      ]
    default:
      return state
  }
}

export default messages
