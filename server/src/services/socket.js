module.exports = {
  send: function(action, socket) {
    socket.send(JSON.stringify({
      name: 'action',
      data: action
    }));
  }
};
