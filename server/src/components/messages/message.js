'use strict';

let id = 1;
class Message {
  constructor(body, author, channel_id) {
    this.id = id++;
    this.body = body;
    this.author = author;
    this.channel_id = channel_id;
    this.createdAt = new Date();
  }
}

module.exports = Message;
