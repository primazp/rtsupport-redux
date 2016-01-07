'use strict';

let Channel = require('./channel');
let SocketService = require('../../services/socket');
let Actions = require('./actions');

function addChannel(state, action){
  let channel = new Channel(action.name);
  SocketService.send(Actions.addChannel(channel));
  if(state.find(c => c.name === action.name)) {
    return state;
  } else {
    return [
      ...state,
      channel
    ]
  }
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
