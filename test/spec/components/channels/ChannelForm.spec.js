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

  it('renders form', () => {
    renderer.render(
      <AddChannel {...props} />
    )
    const actual = renderer.getRenderOutput()
    const expected = (
      <form onSubmit={function noRefCheck() {}}>
        <div className='form-group'>
          <input type='text'
            ref={node => {input = node }}
            className='form-control'
            placeholder='Channel Name'></input>
        </div>
      </form>
    )
    expect(actual).toEqualJSX(expected)
  })
})
