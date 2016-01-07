module.exports = {
  addChannel: function(channel) {
    return {
      type: 'CHANNEL_ADD',
      channel: channel
    }
  }
}
