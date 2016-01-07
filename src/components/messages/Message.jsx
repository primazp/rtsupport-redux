import React from 'react'
import fecha from 'fecha'
import {connect} from 'react-redux'

export class Message extends React.Component {
  render() {
    let createdAt = fecha.format(this.props.message.createdAt, 'HH:mm:ss MM/DD/YYYY')

    return (
      <li className='message'>
        <div className='author'>
          <strong>{this.props.message.author.name}</strong>
          <i className='timestamp'>{createdAt}</i>
        </div>
        <div className='body'>{this.props.message.body}</div>
      </li>
    )
  }
}

export default connect()(Message)
