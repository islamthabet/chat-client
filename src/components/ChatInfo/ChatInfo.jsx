import React from 'react';
import {Warper} from './ChatInfo.style';
import {RiPhoneFill} from 'react-icons/ri';
import {BsCameraVideoFill, BsThreeDots} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import {getActiveChatState} from '../../core/store/activeChat.slice';
import moment from 'moment';
import {useLocation} from 'react-router-dom';

const ChatInfo = () => {
  const activeChat = useSelector(getActiveChatState);
  const location = useLocation();
  const getLastSeen = (lastSeen) => {
    if (lastSeen === 'true') {
      return 'online';
    } else {
      if (moment().diff(lastSeen, 'weeks') > 4) {
        return `last seen since ${moment().diff(lastSeen, 'months')} month`;
      } else if (moment().diff(lastSeen, 'days') > 7) {
        return `last seen since ${moment().diff(lastSeen, 'weeks')} week`;
      } else if (moment().diff(lastSeen, 'hours') > 24) {
        return `last seen since ${moment().diff(lastSeen, 'days')} day`;
      } else if (moment().diff(lastSeen, 'minutes') > 60) {
        return `last seen since ${moment().diff(lastSeen, 'hours')} hour`;
      } else if (moment().diff(lastSeen, 'seconds') > 60) {
        return `last seen since ${moment().diff(lastSeen, 'minutes')} minute`;
      } else {
        return `last seen since ${moment().diff(lastSeen, 'seconds')} second`;
      }
    }
  };
  return (
    <Warper>
      <div className='chat-info'>
        <img
          className='chat-info__image'
          src={activeChat.image}
          alt=''
          crossOrigin='anonymise'
        />
        <div className='chat-info__titles'>
          <span className='chat-info__titles--main'>{activeChat.name}</span>
          {location.pathname.includes('user') ? (
            <span className='chat-info__titles--sub'>
              {getLastSeen(activeChat.lastSeen)}
            </span>
          ) : (
            <div className='flex flex-row gap-3'>
              {activeChat?.members?.map((member) => (
                <span className='chat-info__titles--members' key={member.id}>
                  {member.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='chat-icons'>
        <RiPhoneFill />
        <BsCameraVideoFill />
        <BsThreeDots />
      </div>
    </Warper>
  );
};

export default ChatInfo;
