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

const MessageInput = () => {
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
    await axiosInstance.post('message', {
      message,
      from: profile.id,
      to: activeChat.id,
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
          // if (e.nativeEvent.inputType === 'insertLineBreak') {
          //   e.preventDefault();
          //   return;
          // }
          setMessage(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     sendMessage();
        //   }
        // }}
      ></textarea>
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
