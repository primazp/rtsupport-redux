import React from 'react'
import Message from './Message.jsx'
import {connect} from 'react-redux'

export class MessageList extends React.Component {
  render() {
    return (
      <ul>
        { this.props.messages.map(msg => <Message key={msg.id} message={msg} />) }
      </ul>
    )
  }
}

const mapStateMessageListProps = (state) => {
  return { messages: state.messages }
}

export default connect(mapStateMessageListProps)(MessageList)
