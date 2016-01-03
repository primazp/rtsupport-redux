import React from 'react'
import {connect} from 'react-redux'
import {setUserName} from './UserActions'

export class EditUser extends React.Component {
  render() {
    let input

    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(setUserName(input.value));
          input.value = ''; }}>
        <div className='form-group'>
          <input type='text'
            ref={node => {input = node }}
            className='form-control'
            placeholder='Set Your Name'></input>
        </div>
      </form>
    )
  }
}
export default connect()(EditUser)
