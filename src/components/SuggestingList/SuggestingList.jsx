import React, { useState, useEffect } from 'react';
import SuggestingCard from '../SuggestingCard/SuggestingCard';
import { Warper } from './SuggestingList.style';

import axiosInstance from '../../core/axios/axiosInstance';
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
      setSuggesting((perv) => {
        const arr = [...perv];
        return arr.filter((sug) => {
          if (sug.id !== user.id) return sug;
        });
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

  useEffect(() => {
    socket.on('accept-friend-request', (user) => {
      const newProfile = structuredClone(profile);
      const newRequested = profile.sendRequest.filter((userRequest) => {
        if (user._id !== userRequest._id) return userRequest;
      });
      newProfile.sendRequest = newRequested;
      newProfile.friends.push(user);
      dispatch(setProfileInfo(newProfile));

      getUsers();
    });

    socket.on('reject-friend-request', (user) => {
      const newProfile = structuredClone(profile);
      console.log({ first: newProfile });
      const newRequested = profile.sendRequest.filter((userRequest) => {
        console.log(user, userRequest);
        if (user._id !== userRequest._id) return userRequest;
      });
      newProfile.sendRequest = newRequested;
      console.log({ newProfile });
      dispatch(setProfileInfo(newProfile));

      getUsers();
    });

    return () => {
      socket.removeListener('accept-friend-request');
      socket.removeListener('reject-friend-request');
    };
  }, [profile]);

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
