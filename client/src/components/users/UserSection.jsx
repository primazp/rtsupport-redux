import React from 'react'
import {connect} from 'react-redux'
import UserList from './UserList.jsx'
import UserForm from './UserForm.jsx'

export class UserSection extends React.Component {
  render() {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
          <UserList />
          <UserForm />
        </div>
      </div>
    )
  }
}

export default connect()(UserSection)
