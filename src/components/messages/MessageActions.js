let autoId = 3
export function addMessage(body, author) {
  return {
    type: 'MESSAGE_ADD',
    id: autoId++,
    author,
    body
  }
}
