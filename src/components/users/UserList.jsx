import React from 'react'
import User from './User.jsx'
import {connect} from 'react-redux'

const UserList = ({users}) => {
  return (
    <ul>
      { users.map( usr => <User key={usr.id} user={usr} />) }
    </ul>
  )
}

const mapStateUserListProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateUserListProps)(UserList)
