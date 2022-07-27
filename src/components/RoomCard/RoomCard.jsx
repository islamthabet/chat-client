import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getActiveChatState, setActiveChatState } from '../../core/store/activeChat.slice';
import { Warper } from './RoomCard.style';

const RoomCard = ({ id, name, image, members, admins, createdBy, userPendingRequests }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeChat = useSelector(getActiveChatState);
  return (
    <Warper
      isActive={activeChat.id === id}
      onClick={() => {
        if (activeChat.id === id) return;
        dispatch(
          setActiveChatState({ id, name, members, image, admins, createdBy, userPendingRequests }),
        );
        navigate(`/room/${id}`);
      }}
    >
      <img className="room__card__img" src={image} alt={name} crossOrigin="anonymise" />
      <div className="room__card__info">
        <h4 className="room__card__info--name">{name}</h4>
        <div className="room__card__info--members">
          {members.map((member) => {
            return <span key={member.id}>{member.name}</span>;
          })}
        </div>
      </div>
    </Warper>
  );
};

export default RoomCard;
