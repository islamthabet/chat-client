import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ChatInfo from '../../components/ChatInfo/ChatInfo';
import Main from '../../components/Main/Main';
import {
  getActiveChatState,
  setActiveChatState,
} from '../../core/store/activeChat.slice';
import {getProfileState} from '../../core/store/profile.slice';

const ChatBody = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const activeChat = useSelector(getActiveChatState);
  const param = useParams();
  useEffect(() => {
    if (param.id !== activeChat.id && profile?.id) {
      const userChat = profile.friends.filter(
        (friend) => friend.id === param.id
      );
      dispatch(
        setActiveChatState({
          id: userChat[0].id,
          name: userChat[0].name,
          email: userChat[0].email,
          image: userChat[0].image,
          lastSeen: userChat[0].lastSeen,
        })
      );
    }
  }, [profile]);
  return (
    <>
      <ChatInfo />
      <Main />
    </>
  );
};

export default ChatBody;
