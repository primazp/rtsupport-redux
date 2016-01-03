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
    renderer.render(
      <Channel {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <li className="">
        <a onClick={function noRefCheck() {}}>Lorem</a>&nbsp;
        <a onClick={function noRefCheck() {}} style={{color: 'red'}}>&Chi;</a>
      </li>
    )
    expect(actual).toEqualJSX(expected)
  })

  it('renders active channel', () => {
    props.channel.active = true
    renderer.render(
      <Channel {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <li className="active">
        <a onClick={function noRefCheck() {}}>Lorem</a>&nbsp;
        <a onClick={function noRefCheck() {}} style={{color: 'red'}}>&Chi;</a>
      </li>
    )
    expect(actual).toEqualJSX(expected)
  })
})
