'use strict'

let expect = require('expect');
let deepFreeze = require('../../../../../utils/deep-freeze')
let channels = require('../../../../src/components/channels/reducer')

describe('reducer', () => {
  it('can return default', () => {
    expect(channels(undefined, {})).toEqual([])
  })
})
