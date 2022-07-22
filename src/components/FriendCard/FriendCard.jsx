import React from 'react';
import { Warper } from './FriendCard.style';
import { useDispatch } from 'react-redux';
import { setActiveChatState } from '../../core/store/activeChat.slice';
import { closeDialogue } from '../../core/store/dialogue.slice';

const FriendCard = ({ id, name, email, image }) => {
  const dispatch = useDispatch();
  return (
    <Warper
      onClick={() => {
        dispatch(setActiveChatState({ id, name, email, image }));
        dispatch(closeDialogue());
      }}
    >
      <img src={image} alt={name} crossOrigin="anonymise" />
      <div className="request__card__info">
        <span className="request__card__info__name">{name}</span>
        <span className="request__card__info__email">{email}</span>
      </div>
    </Warper>
  );
};

export default FriendCard;
