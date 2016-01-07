import expect from 'expect'
import deepFreeze from '../../../utils/deep-freeze'
import channels from '../../../../src/components/channels/ChannelReducer'
import {removeChannel, setActiveChannel} from '../../../../src/components/channels/ChannelActions'

describe('reducer', () => {
  it('can return default', () => {
    expect(channels(undefined, {})).toEqual([])
  })

  it('can add channel', () => {
    const state = []
    deepFreeze(state)
    const action = {
      type: 'CHANNEL_ADD',
      channel: { name: 'Lorem', id: 3 }
    }
    expect(channels(state, action)).toEqual([
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
