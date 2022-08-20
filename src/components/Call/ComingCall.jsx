import React from 'react';
import socket, { peer, peerId } from '../../core/socket/socket.client';
import { Button } from 'primereact/button';
import ring from '../../assets/phone-ring.mp3';

const ComingCall = ({ id, name, image, setInfo, from, timeOut }) => {
  const acceptCall = () => {
    setInfo({});
    clearTimeout(timeOut);
    socket.emit('accept-call', { to: id, peerId });
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        peer.call(from, stream);
      })
      .catch((err) => {
        rejectCall();
        console.log(err);
      });
  };
  const rejectCall = () => {
    setInfo({});
    socket.emit('reject-call', { to: id });
    clearTimeout(timeOut);
  };
  return (
    <div className="call__card">
      <div className="call__card__title">{name} Want To Call You</div>
      <img src={image} alt={name} />
      <div className="flex justify-content-center align-items-center gap-4 mt-4">
        <Button
          icon="pi pi-phone"
          className="p-button-rounded p-button-success"
          aria-label="accept-call"
          onClick={acceptCall}
        />
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="reject-call"
          onClick={rejectCall}
        />
      </div>
      <audio src={ring} autoPlay loop hidden></audio>
    </div>
  );
};

export default ComingCall;
