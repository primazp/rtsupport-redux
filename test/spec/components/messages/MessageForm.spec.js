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
  const expected = (
    <input type='text'
      ref={node => {input = node }}
      className='form-control'
      placeholder='Message Text'></input>
  )

  function renderedForm(){
    renderer.render(<AddMessage {...props} />)
    return renderer.getRenderOutput()
  }

  it('renders form', () => {
    expect(renderedForm()).toIncludeJSX(expected)
  })

  it('does not renders input', () => {
    props.activeChannel = null
    expect(renderedForm()).toNotIncludeJSX(expected)
  })
})
