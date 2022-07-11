import React from 'react';
import {Warper} from './ChatInfo.style';
import profile from '../../assets/profile.jpg';
import {RiPhoneFill} from 'react-icons/ri';
import {BsCameraVideoFill, BsThreeDots} from 'react-icons/bs';

const ChatInfo = () => {
  return (
    <Warper>
      <div className='chat-info'>
        <img className='chat-info__image' src={profile} alt='' />
        <div className='chat-info__titles'>
          <span className='chat-info__titles--main'>Youssef islam</span>
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
