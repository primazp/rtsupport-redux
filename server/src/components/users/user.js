'use strict';

var id = 1;
class User {
  constructor(name) {
    this.id = id++;
    this.name = name;
  }
}

module.exports = User;
