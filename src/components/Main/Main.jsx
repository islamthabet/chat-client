import React from 'react';
import MessageInput from '../MessageInput/MessageInput';
import Messages from '../Messages/Messages';
import {Warper} from './Main.style';

const Main = () => {
  return (
    <Warper>
      <Messages />
      <MessageInput />
    </Warper>
  );
};

export default Main;
