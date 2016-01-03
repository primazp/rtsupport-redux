import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {EditUser} from '../../../../src/components/users/UserForm'
expect.extend(expectJSX)

describe('UserForm', () => {
  let props = {
    dispatch: expect.createSpy()
  }
  const renderer = TestUtils.createRenderer()
  
  it('renders input', () => {
    renderer.render(<EditUser {...props} />)
    const actual = renderer.getRenderOutput()
    const expected = (
      <input type='text'
        ref={node => {input = node }}
        className='form-control'
        placeholder='Set Your Name'></input>
    )
    expect(actual).toIncludeJSX(expected)
  })
})
