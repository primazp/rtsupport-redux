import expect from 'expect'
import deepFreeze from '../../../utils/deep-freeze'
import reducer, {setUserName} from '../../../../src/components/users/CurrentUserReducer'

describe('reducer', () => {
  it('can return default', () => {
    expect(reducer(undefined, {})).toEqual({
      name: 'Anonymous',
      id: 1,
      current: true
    })
  })

  it('can set user name', () => {
    const state = { name: 'Anonymous', current: true}
    deepFreeze(state)
    expect(reducer(state, setUserName('John Doe'))).toEqual({
      name: 'John Doe',
      current: true
    })
  })
})
