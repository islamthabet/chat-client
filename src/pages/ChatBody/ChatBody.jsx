import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import ChatInfo from '../../components/ChatInfo/ChatInfo';
import Main from '../../components/Main/Main';
import { getActiveChatState, setActiveChatState } from '../../core/store/activeChat.slice';
import { getProfileState } from '../../core/store/profile.slice';
import { getRoomsState } from '../../core/store/room.slice';

const ChatBody = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = useSelector(getProfileState);
  const activeChat = useSelector(getActiveChatState);
  const rooms = useSelector(getRoomsState);
  const param = useParams();
  useEffect(() => {
    if (param.id !== activeChat.id && profile?.id && location.pathname.includes('user')) {
      const currentUser = profile.friends.filter((friend) => friend.id === param.id);
      dispatch(
        setActiveChatState({
          id: currentUser[0]?.id,
          name: currentUser[0]?.name,
          email: currentUser[0]?.email,
          image: currentUser[0]?.image,
          lastSeen: currentUser[0]?.lastSeen,
        }),
      );
    }
  }, [profile]);

  useEffect(() => {
    if (param.id !== activeChat.id && location.pathname.includes('room')) {
      const currentRoom = rooms.filter((room) => room.id === param.id);
      dispatch(
        setActiveChatState({
          id: currentRoom[0]?.id,
          name: currentRoom[0]?.name,
          members: currentRoom[0]?.members,
          image: currentRoom[0]?.image,
        }),
      );
    }
  }, [rooms]);
  return (
    <>
      <ChatInfo />
      <Main />
    </>
  );
};

export default ChatBody;
