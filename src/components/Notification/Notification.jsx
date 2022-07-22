import React from 'react';
import { Warper } from './Notification.style';
import NotificationList from '../NotificationList/NotificationList';
import SuggestingList from '../SuggestingList/SuggestingList';

const Notification = () => {
  return (
    <Warper>
      <h3 className="notifications__main-title">Notification</h3>
      <NotificationList />
      <h3 className="notifications__main-title my-3">Suggesting</h3>
      <SuggestingList />
    </Warper>
  );
};

export default Notification;
