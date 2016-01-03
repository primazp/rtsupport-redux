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
    renderer.render(
      <ChannelSection />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Channels</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelList />
          <ChannelForm />
        </div>
      </div>
    )
    expect(actual).toEqualJSX(expected)
  })
})
