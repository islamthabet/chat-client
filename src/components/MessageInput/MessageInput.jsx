import React, {useState, useEffect, useRef} from 'react';
import {Warper} from './MessageInput.style';
import Emoji from '../Emoji/Emoji';
import {Button} from 'primereact/button';
import {ImAttachment} from 'react-icons/im';
import {MdEmojiEmotions, MdOutlineMic} from 'react-icons/md';

import {useSelector} from 'react-redux';
import {getProfileState} from '../../core/store/profile.slice';
import {getActiveChatState} from '../../core/store/activeChat.slice';
import axiosInstance from '../../core/axios/axiosInstance';
import socket from '../../core/socket/socket.client';
import {useParams} from 'react-router-dom';

const MessageInput = ({setMessages}) => {
  const params = useParams();
  const profile = useSelector(getProfileState);
  const activeChat = useSelector(getActiveChatState);
  const emojiRef = useRef();
  const file = useRef();
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');

  const handleClickOnBody = (e) => {
    const IsEmojiIcon = e.composedPath().some((path) => {
      return path.id === 'emoji-icon';
    });
    const IsEmoji = e.composedPath().some((path) => {
      return path.tagName?.toLowerCase() === 'em-emoji-picker';
    });
    if (IsEmojiIcon || IsEmoji) {
      return;
    }
    setShowEmoji(false);
  };

  const onAttachFile = (e) => {
    console.log(e.target.files[0]);
  };

  const sendMessage = async () => {
    let data =
      params.type === 'user'
        ? {
            message,
            from: profile.id,
            toUser: activeChat.id,
          }
        : {
            message,
            from: profile.id,
            toRoom: activeChat.id,
          };
    await axiosInstance.post('message', data);
    socket.emit('message', {message, to: activeChat.id});
    setMessages((perv) => {
      const arr = [...perv];
      arr.push({
        message,
        from: profile,
        to: activeChat,
        createdAt: new Date(),
      });
      return arr;
    });
    setMessage('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOnBody);
    return () => {
      return document.removeEventListener('click', handleClickOnBody);
    };
  }, []);
  return (
    <Warper>
      <ImAttachment onClick={() => file.current.click()} />
      <textarea
        placeholder='Type You Text'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}></textarea>
      <MdEmojiEmotions
        id='emoji-icon'
        onClick={() => {
          setShowEmoji(!showEmoji);
        }}
        size='2rem'
      />
      <MdOutlineMic size='2rem' />
      <Button
        icon='pi pi-send'
        className='p-button-rounded'
        aria-label='send'
        onClick={sendMessage}
      />
      {showEmoji && (
        <Emoji
          ref={emojiRef}
          onEmojiSelect={(e) => {
            setMessage((prev) => {
              return `${prev}${e.native}`;
            });
          }}
        />
      )}
      <input type='file' hidden ref={file} />
    </Warper>
  );
};

export default MessageInput;
