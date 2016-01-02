import React from 'react'
import {connect} from 'react-redux'
import {setUserName} from './UserActions'

let EditUser = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={() => {
        dispatch(setUserName(input.value))
        input.value = '' }}>
      <div className='form-group'>
        <input type='text'
          ref={node => {input = node }}
          className='form-control'
          placeholder='Set Your Name'></input>
      </div>
    </form>
  )
}
export default connect()(EditUser)
