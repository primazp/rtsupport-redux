import expect from 'expect'
import deepFreeze from '../../../helpers/deep-freeze'
import messages from '../../../../src/components/messages/MessageReducer'
import {addMessage} from '../../../../src/components/messages/MessageActions'

describe('reducer', () => {
  it('can return default', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('can add messages', () => {
    const state = []
    deepFreeze(state)
    expect(messages(state, addMessage('Lorem'))).toEqual([
      { body: 'Lorem', id: 3, createdAt: new Date(), author: undefined }
    ])
  })
})
