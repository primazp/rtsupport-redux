'use strict';

var Channel = require('./channel');
var SocketService = require('../../services/socket')

function addChannel(state, action){
  let nextState;
  let channel = new Channel(action.name);
  if(state.find(c => c.name === action.name)) {
    nextState = state;
  } else {
    nextState = [
      ...state,
      channel
    ]
  }
  if('ws' in action) {
    let clientAction = {
      type: 'CHANNEL_ADD',
      channel: channel
    }
    SocketService.send(clientAction, action.ws);
  }
  return nextState;
}

function reducer(state, action) {
  if (!state) state = [];
  switch(action.type) {
    case 'CHANNEL_ADD':
      return addChannel(state, action)
    default:
      return state;
  }
}

module.exports = reducer;
