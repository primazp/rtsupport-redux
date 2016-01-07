import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from './MessageActions'

export class AddMessage extends React.Component {
  render() {
    let input
    if(this.props.activeChannel) {
      input = (<input type='text'
        ref={node => {input = node }}
        className='form-control'
        placeholder='Message Text'></input>)
    }

    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(
            addMessage(
              input.value,
              this.props.currentUser,
              this.props.activeChannel.id
            )
          );
          input.value = ''; }}>
        <div className='form-group'>
          {input}
        </div>
      </form>
    )
  }
}
const mapStateMessageFormProps = (state) => {
  return {
    activeChannel: state.channels.find(c => c.active),
    currentUser: state.currentUser
  }
}
export default connect(mapStateMessageFormProps)(AddMessage)
