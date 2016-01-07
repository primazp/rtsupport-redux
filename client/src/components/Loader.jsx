import React from 'react'

export class AppLoader extends React.Component {
  render() {
    return (
      <div className='global-loader-container'>
        <div className='loader-progress large'></div>
      </div>
    )
  }
}
