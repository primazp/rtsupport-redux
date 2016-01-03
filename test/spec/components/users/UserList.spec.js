import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import User from '../../../../src/components/users/User'
import {UserList} from '../../../../src/components/users/UserList'

expect.extend(expectJSX)

describe('UserList', () => {
  let user = {id: 1, name: 'Lorem'}
  let props = {
    users: [user]
  }

  it('renders list of users', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<UserList {...props} />)
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(<User user={user} />)
  })
})
