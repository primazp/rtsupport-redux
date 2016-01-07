import {EventEmitter} from 'events'

let host;

if (location.hostname == 'localhost') {
  host = 'ws://localhost:5000'
} else {
  host = location.origin.replace(/^http/, 'ws')
}

class Socket {
  constructor(ws = new WebSocket(host), ee = new EventEmitter()) {
    this.ws = ws
    this.ee = ee
    ws.onmessage = this.message.bind(this)
    ws.onopen = this.open.bind(this)
    ws.onclose = this.close.bind(this)
  }
  on(name, fn) {
    this.ee.on(name, fn)
  }
  off(name, fn) {
    this.ee.removeListener(name, fn)
  }
  emit(name, data) {
    const message = JSON.stringify({name, data})
    this.ws.send(message)
  }
  message(e) {
    try {
      const message = JSON.parse(e.data)
      console.log(message)
      this.ee.emit(message.name, message.data)
    }
    catch(err) {}
  }
  open(e) {
    this.ee.emit('connect')
  }
  close(e) {
    this.ee.emit('disconnect')
  }
}

export default Socket
