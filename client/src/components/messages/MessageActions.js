let autoId = 3
export function addMessage(body, author, channel_id) {
  return {
    meta: {
      server: true
    },
    type: 'MESSAGE_ADD',
    author,
    body,
    channel_id
  }
}
