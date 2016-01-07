export function setActiveChannel(channel) {
  return {
    type: 'CHANNEL_SET_ACTIVE',
    id: channel.id
  }
}

export function addChannel(name) {
  return {
    meta: {
      server: true
    },
    type: 'CHANNEL_ADD',
    name
  }
}

export function removeChannel(channel) {
  return {
    type: 'CHANNEL_REMOVE',
    channel
  }
}
