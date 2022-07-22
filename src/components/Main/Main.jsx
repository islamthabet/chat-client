import React, { useState } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import Messages from '../Messages/Messages';
import { Warper } from './Main.style';

const Main = () => {
  const [messages, setMessages] = useState([]);
  return (
    <Warper>
      <Messages messages={messages} setMessages={setMessages} />
      <MessageInput setMessages={setMessages} />
    </Warper>
  );
};

export default Main;
