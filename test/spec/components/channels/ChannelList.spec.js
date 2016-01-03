import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import Channel from '../../../../src/components/channels/Channel'
import {ChannelList} from '../../../../src/components/channels/ChannelList'

expect.extend(expectJSX)

describe('ChannelList', () => {
  let channel = {id: 1, name: 'Lorem'}
  let props = {
    channels: [channel]
  }

  it('renders list of channels', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(
      <ChannelList {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <ul>
        <Channel channel={channel} />
      </ul>
    )
    expect(actual).toEqualJSX(expected)
  })
})
