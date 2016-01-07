'use strict';

let Message = require('./message');
let SocketService = require('../../services/socket');
let Actions = require('./actions');

function addMessage(state, action){
  let nextState;
  let message = new Message(action.body, action.author, action.channel_id);
  SocketService.send(Actions.addMessage(message));
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
