import React from 'react';
import { Card } from './NotificationCard.style';

const NotificationCard = ({ image, name, notify, time }) => {
  return (
    <Card>
      <img className="notification__image" src={image} alt="" crossOrigin="anonymise" />
      <div className="notification__info">
        <span className="notification__name"> @{name} </span>
        <span className="notification__notify"> {notify} </span>
        <span className="notification__time"> {time}</span>
      </div>
    </Card>
  );
};

export default NotificationCard;
