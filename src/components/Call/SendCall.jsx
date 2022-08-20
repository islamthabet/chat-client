import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChatState } from '../../core/store/activeChat.slice';
import { endCall } from '../../core/store/call.slice';
import socket from '../../core/socket/socket.client';
import ring from '../../assets/phone-ring.mp3';

const SendCall = ({ answered }) => {
  const { id, name, image } = useSelector(getActiveChatState);
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (answered) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!answered) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [answered]);

  const cancelCall = () => {
    dispatch(endCall());
    socket.emit('cancel-call', { to: id });
  };

  return (
    <div className="call__card">
      <div className="call__card__title">calling {name}</div>
      <img src={image} alt={name} />
      <div className="flex flex-column justify-content-center align-items-center gap-4 mt-4">
        {answered && (
          <div className="call__stopwatch">
            <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </div>
        )}
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="reject-call"
          onClick={cancelCall}
        />
      </div>
      {!answered && <audio src={ring} autoPlay loop hidden></audio>}
    </div>
  );
};

export default SendCall;
