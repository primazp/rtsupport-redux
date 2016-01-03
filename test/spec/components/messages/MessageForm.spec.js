import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {AddMessage} from '../../../../src/components/messages/MessageForm'
expect.extend(expectJSX)

describe('MessageForm', () => {
  let props = {
    dispatch: expect.createSpy(),
    activeChannel: {name: 'Lorem'},
    currentUser: {name: 'John Doe'}
  }
  const renderer = TestUtils.createRenderer()

  it('renders form', () => {
    renderer.render(
      <AddMessage {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <form onSubmit={function noRefCheck() {}}>
        <div className='form-group'>
          <input type='text'
            ref={node => {input = node }}
            className='form-control'
            placeholder='Message Text'></input>
        </div>
      </form>
    )
    expect(actual).toEqualJSX(expected)
  })

  it('renders disabled form', () => {
    props.activeChannel = null
    renderer.render(
      <AddMessage {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <form onSubmit={function noRefCheck() {}}>
        <div className='form-group'>
        </div>
      </form>
    )
    expect(actual).toEqualJSX(expected)
  })
})
