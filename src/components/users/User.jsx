import React from 'react';
import {connect} from 'react-redux';

const User = ({user}) => {
  return (
    <li>
      <a>
        {user.name}
      </a>
    </li>
  )
}

export default connect()(User)
