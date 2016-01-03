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
      author: 'Anonymous',
      id: 0,
      createdAt: new Date('Sun Jan 03 2016 14:26:41 GMT+0300 (MSK)')
    }
  }
  const renderer = TestUtils.createRenderer()

  it('renders message', () => {
    renderer.render(
      <Message {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <li className='message'>
        <div className='author'>
          <strong>Anonymous</strong>
          <i className='timestamp'>14:26:41 01/03/2016</i>
        </div>
        <div className='body'>Lorem</div>
      </li>
    )
    expect(actual).toEqualJSX(expected)
  })
})
