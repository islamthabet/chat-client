import React, { useRef } from 'react';
import { Warper } from './ChatInfo.style';
import { RiPhoneFill } from 'react-icons/ri';
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { useLocation } from 'react-router-dom';
import { sinceTimeAgo } from '../../util/sinceTimeAgo';
import ChatMenu from '../ChatMenu/ChatMenu';
import { useState } from 'react';

const ChatInfo = () => {
  const [showMenu, setShowMenu] = useState(false);
  const activeChat = useSelector(getActiveChatState);
  const location = useLocation();

  return (
    <>
      <Warper>
        <div className="chat-info">
          <img className="chat-info__image" src={activeChat.image} alt="" crossOrigin="anonymise" />
          <div className="chat-info__titles">
            <span className="chat-info__titles--main">{activeChat.name}</span>
            {location.pathname.includes('user') ? (
              <span className="chat-info__titles--sub">
                {activeChat.lastSeen === 'true'
                  ? 'online'
                  : `last seen since ${sinceTimeAgo(activeChat.lastSeen)}`}
              </span>
            ) : (
              <div className="flex flex-row gap-3">
                {activeChat?.members?.map((member) => (
                  <span className="chat-info__titles--members" key={member.id}>
                    {member.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="chat-icons">
          <RiPhoneFill />
          <BsCameraVideoFill />
          <BsThreeDots id="open-chat-dots" onClick={() => setShowMenu(!showMenu)} />
        </div>
        <ChatMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Warper>
    </>
  );
};

export default ChatInfo;
