import React from 'react'
import ChannelSection from './channels/ChannelSection.jsx'
import MessageSection from './messages/MessageSection.jsx'
import UserSection from './users/UserSection.jsx'

class Main extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection />
          <UserSection />
        </div>
        <MessageSection />
      </div>
    )
  }
}

export default Main
