import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {User} from '../../../../src/components/users/User'
expect.extend(expectJSX)

describe('User', () => {
  let props = {
    user: {name: 'Lorem'}
  }
  const renderer = TestUtils.createRenderer()

  it('renders user', () => {
    renderer.render(
      <User {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <li><a>Lorem</a></li>
    )
    expect(actual).toEqualJSX(expected)
  })
})
