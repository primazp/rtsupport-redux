import expect from 'expect'
import deepFreeze from '../../../utils/deep-freeze'
import messages from '../../../../src/components/messages/MessageReducer'

describe('reducer', () => {
  it('can return default', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('can add messages', () => {
    const state = []
    deepFreeze(state)
    const action = {
      type: 'MESSAGE_ADD',
      message: { body: 'Lorem', id: 3, createdAt: new Date(), author: undefined }
    }
    expect(messages(state, action)).toEqual([
      { body: 'Lorem', id: 3, createdAt: new Date(), author: undefined }
    ])
  })
})
