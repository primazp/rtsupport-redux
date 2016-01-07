export function setActiveChannel(channel) {
  return {
    meta: {
      server: true
    },
    type: 'CHANNEL_SET_ACTIVE',
    id: channel.id
  }
}

let autoId = 3
export function addChannel(name) {
  return {
    meta: {
      server: true
    },
    type: 'CHANNEL_ADD',
    id: autoId++,
    name
  }
}

export function removeChannel(channel) {
  return {
    type: 'CHANNEL_REMOVE',
    channel
  }
}
