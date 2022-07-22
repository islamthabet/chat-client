import React, { useRef } from 'react';
import { Warper } from './ChatInfo.style';
import { RiPhoneFill } from 'react-icons/ri';
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { useLocation } from 'react-router-dom';
import { sinceTimeAgo } from '../../util/sinceTimeAgo';
import { OverlayPanel } from 'primereact/overlaypanel';
import ChatMenu from '../ChatMenu/ChatMenu';

const ChatInfo = () => {
  const op = useRef();
  const activeChat = useSelector(getActiveChatState);
  const location = useLocation();

  return (
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
        <BsThreeDots onClick={(e) => op.current.toggle(e)} />
        <OverlayPanel ref={op}>
          <ChatMenu parent={op} />
        </OverlayPanel>
      </div>
    </Warper>
  );
};

export default ChatInfo;
