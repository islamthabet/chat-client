import React, {useState, useEffect} from 'react';
import ChatInfo from '../../components/ChatInfo/ChatInfo';
import Dialogue from '../../components/Dialogue/Dialogue';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Notification from '../../components/Notification/Notification';
import SideMenu from '../../components/SideMenu/SideMenu';
import axiosInstance from '../../core/axios/axiosInstance';
import {Content, Warper} from './Home.style';
import {useDispatch} from 'react-redux';
import {setProfileInfo} from '../../core/store/profile.slice';
import {setLoadingState} from '../../core/store/loading.slice';
import ConfirmDialogue from '../../components/ConfirmDialogue/ConfirmDialogue';

const Home = () => {
  const dispatch = useDispatch();
  const getProfile = async () => {
    const user = await axiosInstance.get('users/me');
    dispatch(setProfileInfo(user.data));
    localStorage.setItem('user', user.data);
    dispatch(setLoadingState(false));
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Header />
      <Warper>
        <SideMenu />
        <Content>
          <ChatInfo />
          <Main />
        </Content>
        <Notification />
      </Warper>
      <Dialogue />
      <ConfirmDialogue />
    </>
  );
};

export default Home;
