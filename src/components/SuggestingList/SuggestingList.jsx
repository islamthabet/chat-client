import React from 'react';
import { useState } from 'react';
import SuggestingCard from '../SuggestingCard/SuggestingCard';
import { Warper } from './SuggestingList.style';

import axiosInstance from '../../core/axios/axiosInstance';
import { useEffect } from 'react';
import socket from '../../core/socket/socket.client';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileState, setProfileInfo } from '../../core/store/profile.slice';

const SuggestingList = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const [suggesting, setSuggesting] = useState([]);
  const getUsers = async () => {
    const res = await axiosInstance.get('users/suggestFriend');
    setSuggesting(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    socket.on('new-user', () => {
      getUsers();
    });
    socket.on('friend-request', (user) => {
      console.log(user);
      setSuggesting((perv) => {
        const arr = [...perv];
        const newArr = arr.filter((sug) => {
          if (sug.id !== user.id) return sug;
        });
        return newArr;
      });
      const updateProfile = structuredClone(profile);
      updateProfile.sendRequest.push(user);
      dispatch(setProfileInfo(updateProfile));
    });
    return () => {
      socket.removeListener('new-user');
      socket.removeListener('friend-request');
    };
  }, [suggesting, profile]);
  return (
    <Warper>
      {suggesting.map((suggest) => {
        return (
          <SuggestingCard
            key={suggest.id}
            setSuggesting={setSuggesting}
            id={suggest.id}
            image={suggest.image}
            name={suggest.name}
            info={suggest.country}
          />
        );
      })}
    </Warper>
  );
};

export default SuggestingList;
