import React from 'react'
import User from './User.jsx'
import {connect} from 'react-redux'

export class UserList extends React.Component {
  render() {
    return (
      <ul>
        { this.props.users.map(usr => <User key={usr.id} user={usr} />) }
      </ul>
    )
  }
}

const mapStateUserListProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateUserListProps)(UserList)
