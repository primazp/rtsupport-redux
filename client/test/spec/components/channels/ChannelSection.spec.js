import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import ChannelList from '../../../../src/components/channels/ChannelList'
import ChannelForm from '../../../../src/components/channels/ChannelForm'
import {ChannelSection} from '../../../../src/components/channels/ChannelSection'

expect.extend(expectJSX)

describe('ChannelSection', () => {
  it('renders ChannelSection', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<ChannelSection />)
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(<ChannelList />)
    expect(actual).toIncludeJSX(<ChannelForm />)
  })
})
