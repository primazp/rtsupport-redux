import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {AddChannel} from '../../../../src/components/channels/ChannelForm'
expect.extend(expectJSX)

describe('ChannelForm', () => {
  let props = {
    dispatch: expect.createSpy()
  }
  const renderer = TestUtils.createRenderer()
  
  it('renders input', () => {
    renderer.render(<AddChannel {...props} />)
    const actual = renderer.getRenderOutput()
    const expected = (
      <input type='text'
        ref={node => {input = node }}
        className='form-control'
        placeholder='Channel Name'></input>
    )
    expect(actual).toIncludeJSX(expected)
  })
})
