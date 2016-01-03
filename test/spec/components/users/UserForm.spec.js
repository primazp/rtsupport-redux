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

  it('renders form', () => {
    renderer.render(
      <EditUser {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <form onSubmit={function noRefCheck() {}}>
        <div className='form-group'>
          <input type='text'
            ref={node => {input = node }}
            className='form-control'
            placeholder='Set Your Name'></input>
        </div>
      </form>
    )
    expect(actual).toEqualJSX(expected)
  })
})
