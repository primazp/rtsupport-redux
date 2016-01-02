import React from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';
import {connect} from 'react-redux';

const MessageSection = ({activeChannel}) => {
  return (
    <div className='messages-container panel panel-default'>
      <div className='panel-heading'>
        <strong>{activeChannel ? activeChannel.name : 'Select Channel'}</strong>
      </div>
      <div className='panel-body messages'>
        <MessageList />
        <MessageForm />
      </div>
    </div>
  )
}

const mapStateMessageSectionProps = (state) => {
  return {
    activeChannel: state.channels.find(c => c.active)
  }
}

export default connect(mapStateMessageSectionProps)(MessageSection);
