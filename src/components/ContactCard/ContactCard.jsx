import React from 'react';
import {Warper} from './ContactCard.style';

const ContactCard = ({
  img,
  name,
  lastMessage,
  isActive,
  notification,
  activeChat,
}) => {
  return (
    <Warper isActive={activeChat}>
      <img className='contact__card__img' src={img} alt={name} />
      <span
        className={
          isActive
            ? 'contact__card__status contact__card__status--active'
            : 'contact__card__status'
        }></span>
      <div className='contact__card__info'>
        <h4 className='contact__card__info--name'>{name}</h4>
        <span className='contact__card__info--message'>
          {lastMessage.message}
        </span>
      </div>
      <div className='contact__card__times'>
        <h6 className='contact__card__times--date'>{lastMessage.date}</h6>
        <span className='contact__card__times--notification'>
          {notification}
        </span>
      </div>
    </Warper>
  );
};

export default ContactCard;
