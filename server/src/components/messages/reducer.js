'use strict';

var Message = require('./message');
var SocketService = require('../../services/socket')

function addMessage(state, action){
  let nextState;
  let message = new Message(action.body, action.author, action.channel_id);
  if('ws' in action) {
    let clientAction = {
      type: 'MESSAGE_ADD',
      message: message
    }
    SocketService.send(clientAction, action.ws);
  }
  return [
    ...state,
    message
  ];
}

function reducer(state, action) {
  if (!state) state = [];
  switch(action.type) {
    case 'MESSAGE_ADD':
      return addMessage(state, action)
    default:
      return state;
  }
}

module.exports = reducer;
