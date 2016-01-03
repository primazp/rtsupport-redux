import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import MessageList from '../../../../src/components/messages/MessageList'
import MessageForm from '../../../../src/components/messages/MessageForm'
import {MessageSection} from '../../../../src/components/messages/MessageSection'

expect.extend(expectJSX)

describe('MessageSection', () => {
  function renderedElement(props = {}) {
    const renderer = TestUtils.createRenderer()
    renderer.render(<MessageSection {...props} />)
    return renderer.getRenderOutput()
  }

  it('renders MessageSection with activeChannel', () => {
    let props = {
      activeChannel: {name: 'Lorem'}
    }
    const actual = renderedElement(props)
    expect(actual).toIncludeJSX(<MessageList />)
    expect(actual).toIncludeJSX(<MessageForm />)
    expect(actual).toIncludeJSX(props.activeChannel.name)
  })

  it('renders MessageSection without activeChannel', () => {
    expect(renderedElement()).toIncludeJSX('Select Channel')
  })
})
