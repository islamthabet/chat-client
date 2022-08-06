import React, { useEffect, useState } from 'react';
import { Warper } from './NotificationList.style';
import NotificationCard from '../NotificationCard/NotificationCard';
import axiosInstance from '../../core/axios/axiosInstance';
import { sinceTimeAgo } from '../../util/sinceTimeAgo';
import socket from '../../core/socket/socket.client';

const NotificationList = () => {
  const [notification, setNotification] = useState([]);

  const getData = async () => {
    const res = await axiosInstance.get('notification');
    setNotification(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    socket.on('notification', (payload) => {
      setNotification((perv) => {
        const arr = [...perv];
        arr.push({
          id: '_' + Math.random().toString(36).substr(2, 9),
          from: {
            image: payload.user.image,
            name: payload.user.name,
          },
          notification: payload.notification,
          createdAt: new Date(),
        });
        return arr;
      });
    });
    return () => {
      socket.removeListener('notification');
    };
  }, []);

  return (
    <Warper>
      {notification.map((notify) => {
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
