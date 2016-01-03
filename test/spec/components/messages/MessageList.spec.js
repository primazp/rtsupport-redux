import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import Message from '../../../../src/components/messages/Message'
import {MessageList} from '../../../../src/components/messages/MessageList'

expect.extend(expectJSX)

describe('MessageList', () => {
  let message = {id: 1, body: 'Lorem'}
  let props = {
    messages: [message]
  }

  it('renders list of messages', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(
      <MessageList {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <ul>
        <Message message={message} />
      </ul>
    )
    expect(actual).toEqualJSX(expected)
  })
})
