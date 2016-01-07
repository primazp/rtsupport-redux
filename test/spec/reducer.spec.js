import expect from 'expect'
import reducer from '../../src/reducer'
import {createStore} from 'redux'

describe('export', () => {
  it('combines reducers', () => {
    const store = createStore(reducer)
    expect(store.getState()).toEqual({
      channels: [],
      users: [],
      currentUser: {
        name: 'Anonymous',
        id: 1,
        current: true
      },
      messages: [],
      connected: false
    })
  })
})
