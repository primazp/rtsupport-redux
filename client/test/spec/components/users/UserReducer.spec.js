import expect from 'expect'
import deepFreeze from '../../../../../utils/deep-freeze'
import users from '../../../../src/components/users/UserReducer'

describe('reducer', () => {
  it('can return default', () => {
    expect(users(undefined, {})).toEqual([])
  })
})
