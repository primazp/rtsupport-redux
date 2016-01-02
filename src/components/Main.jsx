import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
// import MessageSection from './messages/MessageSection.jsx';
// import UserSection from './users/UserSection.jsx';
// import Socket from '../socket.js';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let activeChannel = {
  //     id: 1,
  //     name: 'Hardware Support'
  //   }
  //   this.state = {
  //     channels: [
  //       activeChannel
  //     ],
  //     messages: [],
  //     users: [{id: 0, name: 'Anonymous'}],
  //     activeChannel
  //   }
  // }
  // componentDidMount() {
  //   let socket = this.socket = new Socket();
  //   socket.on('connect', this.onConnect.bind(this));
  //   socket.on('disconnect', this.onDisconnect.bind(this));
  //   socket.on('channel add', this.onAddChannel.bind(this));
  //   socket.on('user add', this.onAddUser.bind(this));
  //   socket.on('user edit', this.onEditUser.bind(this));
  //   socket.on('user remove', this.onRemoveUser.bind(this));
  //   socket.on('message add', this.onAddMessage.bind(this));
  // }
  // onConnect() {
  //   this.setState({connected: true});
  //   this.socket.emit('channel subscribe');
  //   this.socket.emit('user subscribe');
  // }
  // onDisconnect() {
  //   this.setState({connected: false});
  // }
  // onAddMessage(message) {
  //   let {messages} = this.state;
  //   messages.push(message);
  //   this.setState({messages});
  // }
  // onAddUser(user) {
  //   let {users} = this.state;
  //   users.push(user);
  //   this.setState({users});
  // }
  // onEditUser(user) {
  //   let {users} = this.state;
  //   users = users.map(u => {
  //     if (user.id === u.id) return user;
  //     else return u;
  //   });
  //   this.setState({users});
  // }
  // onRemoveUser(user) {
  //   let {users} = this.state;
  //   users = users.filter(u => {
  //     return user.id !== u.id
  //   });
  //   this.setState({users});
  // }
  // onAddChannel(channel) {
  //   let {channels} = this.state;
  //   channels.push(channel);
  //   this.setState({channels});
  // }
  // addChannel(name) {
  //   this.socket.emit('channel add', {name});
  // }
  // setChannel(activeChannel) {
  //   this.setState({activeChannel});
  //   this.socket.emit('message unsubscribe');
  //   this.setState({messages: []});
  //   this.socket.emit('message subscribe', {channelId: activeChannel.id});
  // }
  // addMessage(body) {
  //   let {activeChannel} = this.state;
  //   this.socket.emit('message add', { channelId: activeChannel.id, body });
  // }
  // setUserName(name) {
  //   this.socket.emit('user edit', {name});
  // }
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection />
        </div>
      </div>
    )
  }
}

export default Main;
