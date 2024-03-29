import React, { useEffect, useState } from 'react';
import Dialogue from '../../components/Dialogue/Dialogue';
import Header from '../../components/Header/Header';
import Notification from '../../components/Notification/Notification';
import SideMenu from '../../components/SideMenu/SideMenu';
import axiosInstance from '../../core/axios/axiosInstance';
import { Content, Warper } from './Home.style';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileState, setFriendState, setProfileInfo } from '../../core/store/profile.slice';
import { setLoadingState } from '../../core/store/loading.slice';
import ConfirmDialogue from '../../components/ConfirmDialogue/ConfirmDialogue';
import socket from '../../core/socket/socket.client';
import { Outlet, useNavigate } from 'react-router-dom';
import { getActiveChatState, setActiveChatState } from '../../core/store/activeChat.slice';
import Call from '../../components/Call/Call';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [friendsIds, setFriendsIds] = useState([]);
  const friends = useSelector(getProfileState).friends;
  const activeChat = useSelector(getActiveChatState);
  const getProfile = async () => {
    try {
      const user = await axiosInstance.get('users/me');
      dispatch(setProfileInfo(user.data));
      dispatch(setFriendState(user.data.friends));
      setFriendsIds(user.data.friends.map((friend) => friend.id));
      localStorage.setItem('user', JSON.stringify(user.data));
    } catch (err) {
      localStorage.clear();
      navigate('/auth');
    }
    dispatch(setLoadingState(false));
  };

  const userJoinOrLeft = (ev) => {
    socket.on(ev, (user) => {
      if (friendsIds.includes(user)) {
        if (activeChat.id === user)
          dispatch(
            setActiveChatState({
              ...activeChat,
              lastSeen: ev === 'userJoin' ? 'true' : new Date(),
            }),
          );
        const updateFriends = friends.map((friend) => {
          const updateFriend = structuredClone(friend);
          if (updateFriend.id === user) {
            updateFriend.lastSeen = ev === 'userJoin' ? 'true' : new Date();
          }
          return updateFriend;
        });
        dispatch(setFriendState(updateFriends));
      }
    });
  };

  useEffect(() => {
    socket.connect();
    getProfile();
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    userJoinOrLeft('userJoin');
    userJoinOrLeft('userLeft');

    return () => {
      socket.removeListener('userJoin');
      socket.removeListener('userLeft');
    };
  }, [friendsIds]);

  // useEffect(() => {
  // const event = new EventSource('http://localhost:5000/api/v1/event');
  // event.onmessage = (event) => {
  //   toast.success(event.data);
  //   // };
  // }, []);

  return (
    <>
      <Header />
      <Warper>
        <SideMenu />
        <Content>
          <Outlet />
        </Content>
        <Notification />
      </Warper>
      <Dialogue />
      <ConfirmDialogue />
      <Call />
    </>
  );
};

export default Home;
