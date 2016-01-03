import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import UserList from '../../../../src/components/users/UserList'
import UserForm from '../../../../src/components/users/UserForm'
import {UserSection} from '../../../../src/components/users/UserSection'

expect.extend(expectJSX)

describe('UserSection', () => {
  it('renders UserSection', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<UserSection />)
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(<UserList />)
    expect(actual).toIncludeJSX(<UserForm />)
  })
})
