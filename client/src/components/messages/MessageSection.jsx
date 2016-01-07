import React from 'react'
import MessageList from './MessageList.jsx'
import MessageForm from './MessageForm.jsx'
import {connect} from 'react-redux'

export class MessageSection extends React.Component {
  render() {
    let header = this.props.activeChannel ? this.props.activeChannel.name : 'Select Channel'

    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>{header}</strong>
        </div>
        <div className='panel-body messages'>
          <MessageList />
          <MessageForm />
        </div>
      </div>
    )
  }
}

const mapStateMessageSectionProps = (state) => {
  return {
    activeChannel: state.channels.find(c => c.active)
  }
}

export default connect(mapStateMessageSectionProps)(MessageSection)
