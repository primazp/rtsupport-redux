import React from 'react';
import {connect} from 'react-redux';
import {setActiveChannel, removeChannel} from './ChannelActions'

const Channel = ({channel, onChannelClick, onRemoveClick}) => {
  return (
    <li className={channel.active ? 'active' : ''}>
      <a onClick={e => {
          e.preventDefault();
          onChannelClick();
        }}>{channel.name}</a>&nbsp;
      <a onClick={e => {
          e.preventDefault();
          onRemoveClick();
        }} style={{color: 'red'}}>&Chi;</a>
    </li>
  )
};

const mapDispatchChannelProps = (dispatch, ownProps) => {
  return {
    onChannelClick: () => { dispatch(setActiveChannel(ownProps.channel)); },
    onRemoveClick: () => { dispatch(removeChannel(ownProps.channel)); }
  }
}

export default connect(undefined, mapDispatchChannelProps)(Channel);
