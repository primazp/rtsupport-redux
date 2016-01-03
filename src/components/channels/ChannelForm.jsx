import React from 'react'
import {connect} from 'react-redux'
import {addChannel} from './ChannelActions'

export class AddChannel extends React.Component {
  render() {
    let input

    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(addChannel(input.value));
          input.value = ''; }}>
        <div className='form-group'>
          <input type='text'
            ref={node => {input = node }}
            className='form-control'
            placeholder='Channel Name'></input>
        </div>
      </form>
    )
  }
}
export default connect()(AddChannel)
