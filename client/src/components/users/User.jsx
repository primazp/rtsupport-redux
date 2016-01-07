import React from 'react'
import {connect} from 'react-redux'

export class User extends React.Component {
  render() {
    const cssClass = this.props.user.current ? 'current' : '';

    return (
      <li>
        <a className={cssClass}>
          {this.props.user.name}
        </a>
      </li>
    )
  }
}

export default connect()(User)
