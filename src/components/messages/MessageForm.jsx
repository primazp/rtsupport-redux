import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from './MessageActions'

let AddMessage = ({ activeChannel, currentUser, dispatch }) => {
  let input
  if(activeChannel) {
    input = (<input type='text'
      ref={node => {input = node }}
      className='form-control'
      placeholder='Message Text'></input>)
  }

  return (
    <form onSubmit={() => {
        dispatch(addMessage(input.value, currentUser.name))
        input.value = '' }}>
      <div className='form-group'>
        {input}
      </div>
    </form>
  )
}
const mapStateMessageFormProps = (state) => {
  return {
    activeChannel: state.channels.find(c => c.active),
    currentUser: state.users.find(u => u.current)
  }
}
export default connect(mapStateMessageFormProps)(AddMessage)
