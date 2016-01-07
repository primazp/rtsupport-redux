import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {Channel} from '../../../../src/components/channels/Channel'
expect.extend(expectJSX)

describe('Channel', () => {
  let props = {
    channel: {name: 'Lorem'},
    onChannelClick: expect.createSpy(),
    onRemoveClick: expect.createSpy()
  }
  const renderer = TestUtils.createRenderer()

  it('renders channel', () => {
    renderer.render(<Channel {...props} />)
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(props.channel.name)
  })

  it('renders active channel', () => {
    props.channel.active = true
    renderer.render(<Channel {...props} />)
    const actual = renderer.getRenderOutput().props.className.includes('active')
    expect(actual).toEqual(true)
  })
})
