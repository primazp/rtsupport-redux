import expect from 'expect'
import reducer from '../../src/reducer'
import {createStore} from 'redux'

describe('export', () => {
  it('combines reducers', () => {
    const store = createStore(reducer)
    expect(store.getState()).toEqual({
      channels: [],
      users: [],
      messages: [],
      connected: false
    })
  })
})
