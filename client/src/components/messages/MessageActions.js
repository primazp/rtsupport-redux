let autoId = 3
export function addMessage(body, author) {
  return {
    meta: {
      server: true
    },
    type: 'MESSAGE_ADD',
    id: autoId++,
    author,
    body
  }
}
