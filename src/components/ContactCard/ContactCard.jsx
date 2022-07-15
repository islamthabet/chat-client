import React from 'react';
import {Warper} from './ContactCard.style';
import {useSelector, useDispatch} from 'react-redux';
import {
  getActiveChatState,
  setActiveChatState,
} from '../../core/store/activeChat.slice';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

const ContactCard = ({id, image, name, email, lastSeen, notification}) => {
  const activeChat = useSelector(getActiveChatState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Warper
      isActive={activeChat.id === id}
      onClick={() => {
        if (activeChat.id === id) return;
        dispatch(setActiveChatState({id, name, email, image, lastSeen}));
        navigate(`/${id}`);
      }}>
      <img
        className='contact__card__img'
        src={image}
        alt={name}
        crossOrigin='anonymise'
      />
      <span
        className={
          lastSeen === 'true'
            ? 'contact__card__status contact__card__status--active'
            : 'contact__card__status'
        }></span>
      <div className='contact__card__info'>
        <h4 className='contact__card__info--name'>{name}</h4>
        <span className='contact__card__info--message'>
          {/* {lastMessage?.message || 'say hi'} */}
        </span>
      </div>
      <div className='contact__card__times'>
        <h6 className='contact__card__times--date'>
          {lastSeen === 'true'
            ? moment().format('dd/mm/yy')
            : moment(lastSeen).format('DD/MM/YY')}
        </h6>
        {notification && (
          <span className='contact__card__times--notification'>
            {notification}
          </span>
        )}
      </div>
    </Warper>
  );
};

export default ContactCard;
