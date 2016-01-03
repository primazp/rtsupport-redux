import expect from 'expect'
import deepFreeze from '../../../helpers/deep-freeze'
import users from '../../../../src/components/users/UserReducer'
import {setUserName} from '../../../../src/components/users/UserActions'

describe('reducer', () => {
  it('can return default', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('can set user name', () => {
    const state = [{ name: 'Anonymous', current: true}]
    deepFreeze(state)
    expect(users(state, setUserName('John Doe'))).toEqual([
      { name: 'John Doe', current: true}
    ])
  })
})
