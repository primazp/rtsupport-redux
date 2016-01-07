'use strict';

var Redux = require('redux');
var channels = require('./components/channels/reducer');
var messages = require('./components/messages/reducer');
var users = require('./components/users/reducer');
var Middleware = require('./middleware');

var reducer = Redux.combineReducers({
  channels: channels,
  messages: messages,
  users: users
});

var sampleData = {
  channels: [
    {id: 1, name: 'Hardware Support'},
    {id: 2, name: 'Software Support'}
  ],
  users: [
    {id: 0, name: 'Jane Doe'}
  ]
}

function makeStore() {
  return Redux.createStore(reducer, sampleData);
}

module.exports = makeStore;
