import React from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { endCall } from '../../core/store/call.slice';
import socket from '../../core/socket/socket.client';
import ring from '../../assets/phone-ring.mp3';

const SendCall = () => {
  const dispatch = useDispatch();
  const { id, name, image } = useSelector(getActiveChatState);

  const cancelCall = () => {
    dispatch(endCall());
    socket.emit('cancel-call', { to: id });
  };
  return (
    <div className="call__card">
      <div className="call__card__title">calling {name}</div>
      <img src={image} alt={name} />
      <div className="flex justify-content-center align-items-center gap-4 mt-4">
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="reject-call"
          onClick={cancelCall}
        />
      </div>
      <audio src={ring} autoPlay loop hidden></audio>
    </div>
  );
};

export default SendCall;
