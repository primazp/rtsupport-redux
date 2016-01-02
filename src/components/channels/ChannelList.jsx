import React from 'react'
import {connect} from 'react-redux'
import Channel from './Channel.jsx'

const ChannelList = ({channels}) => (
  <ul>
    { channels.map(chan => <Channel key={chan.id} channel={chan} />) }
  </ul>
)

const mapStateChannelListProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateChannelListProps)(ChannelList)
