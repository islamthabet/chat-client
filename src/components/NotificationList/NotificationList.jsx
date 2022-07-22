import React, { useEffect } from 'react';
import { Warper } from './NotificationList.style';
import { useState } from 'react';
import NotificationCard from '../NotificationCard/NotificationCard';
import axiosInstance from '../../core/axios/axiosInstance';
import { sinceTimeAgo } from '../../util/sinceTimeAgo';

const NotificationList = () => {
  const [notification, setNotification] = useState([]);

  const getData = async () => {
    const res = await axiosInstance.get('notification');
    console.log(res.data);
    setNotification(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Warper>
      {notification.map((notify, index) => {
        return (
          <NotificationCard
            key={notify.id}
            image={notify.from.image}
            name={notify.from.name}
            notify={notify.notification}
            time={`since ${sinceTimeAgo(notify.createdAt)}`}
          />
        );
      })}
    </Warper>
  );
};

export default NotificationList;
