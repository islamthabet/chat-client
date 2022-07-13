import React, {useState, useEffect} from 'react';
import {Warper, Message} from './Messages.style';
import {getActiveChatState} from '../../core/store/activeChat.slice';
import {useSelector} from 'react-redux';
import axiosInstance from '../../core/axios/axiosInstance';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const activeChat = useSelector(getActiveChatState);

  const getMessages = async () => {
    const res = await axiosInstance.get(`message/${activeChat.id}`);
    setMessages(res.data);
  };

  useEffect(() => {
    getMessages();
  }, [activeChat]);

  return (
    <Warper>
      {messages.map((message) => (
        <Message key={message.id} sended={message.to.id === activeChat.id}>
          <span>{message.message}</span>
        </Message>
      ))}
    </Warper>
  );
};

export default Messages;
