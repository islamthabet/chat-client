import React from 'react';
import axiosInstance from '../../core/axios/axiosInstance';
import socket from '../../core/socket/socket.client';
import { Card, RoundButton } from './SuggestingCard.style';

const Suggesting = ({ id, image, name, info, setSuggesting }) => {
  return (
    <Card>
      <div className="suggesting__meta">
        <img crossOrigin="anonymise" className="suggesting__image" src={image} alt="" />
        <div className="suggesting__titles">
          <span className="suggesting__name">{name} </span>
          <span className="suggesting__info">{info} </span>
        </div>
      </div>
      <RoundButton
        label="Add"
        onClick={async () => {
          await axiosInstance.post(`users/sendFriendRequest/${id}`);
          setSuggesting((perv) => {
            const arr = [...perv];
            const newArr = arr.filter((sug) => {
              if (sug.id !== id) return sug;
            });
            return newArr;
          });
          socket.emit('friend-request', id);
        }}
      />
    </Card>
  );
};

export default Suggesting;
