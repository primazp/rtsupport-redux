import React from 'react'
import {connect} from 'react-redux'
import ChannelList from './ChannelList'
import ChannelForm from './ChannelForm'

export class ChannelSection extends React.Component {
  render() {
    return (
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
  }
}

export default connect()(ChannelSection)
