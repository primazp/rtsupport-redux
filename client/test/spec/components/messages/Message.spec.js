import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {Message} from '../../../../src/components/messages/Message'
expect.extend(expectJSX)

describe('Message', () => {
  let props = {
    message: {
      body: 'Lorem',
      author: { name: 'Anonymous' },
      id: 0,
      createdAt: new Date('Sun Jan 03 2016 14:26:41 GMT+0300 (MSK)')
    }
  }
  const renderer = TestUtils.createRenderer()

  it('renders message', () => {
    renderer.render(<Message {...props} />)
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX('14:26:41 01/03/2016')
    expect(actual).toIncludeJSX(props.message.body)
    expect(actual).toIncludeJSX(props.message.author.name)
  })
})
