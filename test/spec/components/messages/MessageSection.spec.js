import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import MessageList from '../../../../src/components/messages/MessageList'
import MessageForm from '../../../../src/components/messages/MessageForm'
import {MessageSection} from '../../../../src/components/messages/MessageSection'

expect.extend(expectJSX)

describe('MessageSection', () => {
  it('renders MessageSection with activeChannel', () => {
    let props = {
      activeChannel: {name: 'Lorem'}
    }
    const renderer = TestUtils.createRenderer()
    renderer.render(
      <MessageSection {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>Lorem</strong>
        </div>
        <div className='panel-body messages'>
          <MessageList />
          <MessageForm />
        </div>
      </div>
    )
    expect(actual).toEqualJSX(expected)
  })

  it('renders MessageSection without activeChannel', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(
      <MessageSection />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>Select Channel</strong>
        </div>
        <div className='panel-body messages'>
          <MessageList />
          <MessageForm />
        </div>
      </div>
    )
    expect(actual).toEqualJSX(expected)
  })
})
