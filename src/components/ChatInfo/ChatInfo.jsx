import React, { useRef, useState } from 'react';
import { Warper } from './ChatInfo.style';
import { RiPhoneFill } from 'react-icons/ri';
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { useLocation } from 'react-router-dom';
import { sinceTimeAgo } from '../../util/sinceTimeAgo';
import ChatMenu from '../ChatMenu/ChatMenu';
import socket, { peerId } from '../../core/socket/socket.client';
import { startCall } from '../../core/store/call.slice';

const ChatInfo = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const activeChat = useSelector(getActiveChatState);
  const location = useLocation();

  const makeCall = () => {
    dispatch(startCall());
    socket.emit('start-call', { to: activeChat.id, from: peerId });
  };

  return (
    <>
      <Warper>
        <div className="chat-info">
          <img className="chat-info__image" src={activeChat.image} alt="" crossOrigin="anonymise" />
          <div className="chat-info__titles">
            <span className="chat-info__titles--main">{activeChat.name}</span>
            {location?.pathname?.includes('user') ? (
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
          <RiPhoneFill onClick={makeCall} />
          <BsCameraVideoFill />
          <BsThreeDots id="open-chat-dots" onClick={() => setShowMenu(!showMenu)} />
        </div>
        <ChatMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Warper>
    </>
  );
};

export default ChatInfo;
