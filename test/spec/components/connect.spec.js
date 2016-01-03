import expect from 'expect'
import {connect, connected} from '../../../src/components/connect'

describe('reducer', () => {
  it('sets connect status', () => {
    const state = false
    expect(connected(state, connect(true))).toEqual(true)
  })

  it('can return default', () => {
    expect(connected(undefined, {})).toEqual(false)
  })
})
