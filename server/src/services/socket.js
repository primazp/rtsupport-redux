'use strict';

let wss = require('../server');

let service = {
  send: function(action) {
    let payload = JSON.stringify({
      name: 'action',
      data: action
    });
    wss.broadcast(payload);
  }
};

module.exports = service;
