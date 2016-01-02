import React from 'react';
import fecha from 'fecha';
import {connect} from 'react-redux';

const Message = ({message}) => {
  console.log(message);
  let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY')
  return (
    <li className='message'>
      <div className='author'>
        <strong>{message.author}</strong>
        <i className='timestamp'>{createdAt}</i>
      </div>
      <div className='body'>{message.body}</div>
    </li>
  )
}

export default connect()(Message);
