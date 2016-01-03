import React from 'react'
import {connect} from 'react-redux'

export class User extends React.Component {
  render() {
    return (
      <li>
        <a>
          {this.props.user.name}
        </a>
      </li>
    )
  }
}

export default connect()(User)
