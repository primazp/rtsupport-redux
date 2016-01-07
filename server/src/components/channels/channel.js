'use strict';

var id = 3;
class Channel {
  constructor(name) {
    this.id = id++;
    this.name = name;
  }
}

module.exports = Channel;
