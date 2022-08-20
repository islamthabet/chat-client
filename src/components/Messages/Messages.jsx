import React, { useState, useEffect } from 'react';
import { Warper, Message } from './Messages.style';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { useSelector } from 'react-redux';
import axiosInstance from '../../core/axios/axiosInstance';
import socket from '../../core/socket/socket.client';
import { getProfileState } from '../../core/store/profile.slice';
import { useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';

const Messages = ({ messages, setMessages }) => {
  const messagesWarper = useRef();
  const params = useParams();
  const location = useLocation();
  const activeChat = useSelector(getActiveChatState);
  const profile = useSelector(getProfileState);

  const getMessages = async () => {
    const res = await axiosInstance.get(`message/${params.id}/${params.type}`);
    setMessages(res.data);
  };

  useEffect(() => {
    getMessages();
  }, [location]);

  useEffect(() => {
    socket.on('message', (msg) => {
      if (msg.from === activeChat.id) {
        setMessages((perv) => {
          const arr = [...perv];
          arr.push({
            to: profile,
            from: activeChat,
            message: msg.message,
            createdAt: msg.createdAt,
          });
          return arr;
        });
      }
    });
    return () => socket.removeListener('message');
  }, [activeChat]);

  useEffect(() => {
    messagesWarper.current.scrollTop = messagesWarper.current.scrollHeight;
  }, [messages]);

  return (
    <Warper ref={messagesWarper}>
      {messages.map((message, index) => (
        <Message key={index} sended={message.from.id === profile.id}>
          <div>{message.message}</div>
        </Message>
      ))}
    </Warper>
  );
};

export default Messages;
