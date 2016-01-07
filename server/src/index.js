'use strict';

var wss = require('./server');
var makeStore = require('./store');
var store = makeStore();

wss.on('connection', function(ws) {
  ws.send(JSON.stringify({
    name: 'state',
    data: store.getState()
  }));
  console.log('websocket connection open')

  ws.on('close', function() {
    console.log('websocket connection close')
  });

  ws.on('message', function incoming(message) {
    message = JSON.parse(message);
    if(message.name == 'action') {
      store.dispatch(message.data);
    }
  });
});
