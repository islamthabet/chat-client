import React, {useEffect} from 'react';
import {useState} from 'react';
import NotificationCard from '../NotificationCard/NotificationCard';
import {Warper} from './NotificationList.style';
import profile from '../../assets/profile.jpg';
import axios from 'axios';

const NotificationList = () => {
  const [notification, setNotification] = useState([
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
    {
      image: profile,
      name: 'rahmaa',
      notify: 'add you in Family Group',
      time: '1 hour',
    },
  ]);

  // const getData = async () => {
  //   const res = await axios.get('https://randomuser.me/api/?results=20');
  //   console.log(res.data.results);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <Warper>
      {notification.map((notify, index) => {
        return (
          <NotificationCard
            key={index}
            image={notify.image}
            name={notify.name}
            notify={notify.notify}
            time={notify.time}
          />
        );
      })}
    </Warper>
  );
};

export default NotificationList;
