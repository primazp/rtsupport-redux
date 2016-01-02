import React from 'react'
import Message from './Message.jsx'
import {connect} from 'react-redux'

const MessageList = ({messages}) => {
  return (
    <ul>
      { messages.map( msg => <Message key={msg.id} message={msg} />) }
    </ul>
  )
}

const mapStateMessageListProps = (state) => {
  return { messages: state.messages }
}

export default connect(mapStateMessageListProps)(MessageList)
