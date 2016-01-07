var WebSocketServer = require('ws').Server;
var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var makeStore = require('./store');

app.use(express.static(__dirname + '/'));

var server = http.createServer(app);
server.listen(port);
console.log('http server listening on %d', port);

var store = makeStore();

var wss = new WebSocketServer({server: server});
console.log('websocket server created');

wss.on('connection', function(ws) {
  ws.send(JSON.stringify({
    name: 'state',
    data: {
      channels: [
        {id: 0, name: 'Hardware Support'},
        {id: 2, name: 'Software Support'}
      ],
      users: [
        {id: 0, name: 'Jane Doe'}
      ]
    }
  }));
  console.log('websocket connection open')

  ws.on('close', function() {
    console.log('websocket connection close')
  });

  ws.on('message', function incoming(message) {
    message = JSON.parse(message);
    if(message.name == 'action') {
      var action = Object.assign({}, message.data, {ws: ws});
      store.dispatch(action);
    }
  });
});
