import React, { useEffect, useState } from 'react';
import socket, { peer, peerId } from '../../core/socket/socket.client';
import { Warper } from './Call.style';
import { useDispatch, useSelector } from 'react-redux';
import { endCall, getCallState } from '../../core/store/call.slice';
import ComingCall from './ComingCall';
import SendCall from './SendCall';

const Call = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState();
  const [answered, setAnswered] = useState(false);
  const [fromPeerId, setFromPeerId] = useState('');
  const onCall = useSelector(getCallState);
  const [audioStream, setStream] = useState();
  useEffect(() => {
    if (audioStream) {
      setAnswered(true);
      const audioWarper = document.getElementById('audio-warper');
      const audio = document.createElement('audio');
      audio.srcObject = audioStream;
      audio.autoplay = true;
      audioWarper.appendChild(audio);
    }
  }, [audioStream]);
  useEffect(() => {
    peer.on('call', (call) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          call.answer(stream);
          call.on('stream', (receivedStream) => {
            setStream(receivedStream);
          });
        })
        .catch((err) => console.log(err));
    });

    return () => {
      peer.removeListener('call');
    };
  }, []);
  let timeOut;
  useEffect(() => {
    socket.on('call-received', (payload) => {
      setFromPeerId(payload.peerId);
      setInfo(payload.from);
      timeOut = setTimeout(() => {
        setInfo({});
        socket.emit('no-answer', { to: info._id });
      }, 30000);
    });
    socket.on('close-call', () => {
      dispatch(endCall());
      setInfo({});
    });
    return () => {
      socket.removeListener('call-received');
    };
  }, []);

  return (
    <>
      {(onCall || info?.name) && (
        <Warper id="audio-warper">
          {onCall && <SendCall answered={answered} />}
          {info?.name && (
            <ComingCall
              id={info._id}
              name={info?.name}
              image={info?.image}
              from={fromPeerId}
              setInfo={setInfo}
              timeOut={timeOut}
            />
          )}
        </Warper>
      )}
    </>
  );
};

export default Call;
