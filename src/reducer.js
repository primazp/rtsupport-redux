import { combineReducers } from 'redux'
import channels from './components/channels/ChannelReducer'
import users from './components/users/UserReducer'
import messages from './components/messages/MessageReducer'

export default combineReducers({
  channels,
  users,
  messages
})
