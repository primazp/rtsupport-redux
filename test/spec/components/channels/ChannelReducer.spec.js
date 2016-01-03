import expect from 'expect'
import deepFreeze from '../../../helpers/deep-freeze'
import channels from '../../../../src/components/channels/ChannelReducer'
import {addChannel, removeChannel, setActiveChannel} from '../../../../src/components/channels/ChannelActions'

describe('reducer', () => {
  it('can return default', () => {
    expect(channels(undefined, {})).toEqual([])
  })

  it('can add channel', () => {
    const state = []
    deepFreeze(state)
    expect(channels(state, addChannel('Lorem'))).toEqual([
      { name: 'Lorem', id: 3 }
    ])
  })

  it('can remove channel', () => {
    const state = [{ name: 'Lorem', id: 3 }]
    deepFreeze(state)
    expect(channels(state, removeChannel(state[0]))).toEqual([])
  })

  it('can set active channel', () => {
    const state = [{ name: 'Lorem', id: 3 }]
    deepFreeze(state)
    expect(channels(state, setActiveChannel(state[0]))).toEqual([
      { name: 'Lorem', id: 3, active: true }
    ])
  })
})
