module.exports = {
  addMessage: function(message) {
    return {
      type: 'MESSAGE_ADD',
      message: message
    }
  }
}
