import React from 'react';
import {Warper} from './ChatInfo.style';
import {RiPhoneFill} from 'react-icons/ri';
import {BsCameraVideoFill, BsThreeDots} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import {getActiveChatState} from '../../core/store/activeChat.slice';

const ChatInfo = () => {
  const activeChat = useSelector(getActiveChatState);
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
          <span className='chat-info__titles--sub'>
            last seen 3 minutes ago
          </span>
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
