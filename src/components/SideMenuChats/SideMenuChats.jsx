import React, {useState} from 'react';
import {Button} from 'primereact/button';
import ContactList from '../ContactList/ContactList';
import {Warper, RoundInput} from './SideMenuChats.style';
import {useDispatch} from 'react-redux';
import {closeDialogue, openDialogue} from '../../core/store/dialogue.slice';
import NewChat from '../NewChat/NewChat';
import axiosInstance from '../../core/axios/axiosInstance';
import {setFriendState} from '../../core/store/friends.slice';

const SideMenuChats = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const startNewChat = () => {
    dispatch(
      openDialogue({
        show: true,
        type: 'dialogue',
        title: 'chats',
        content: dialogueBody(),
        width: '300px',
        onAccept: () => {
          dispatch(closeDialogue());
        },
        onReject: () => {
          dispatch(closeDialogue());
        },
      })
    );
  };

  const dialogueBody = () => {
    return <NewChat />;
  };
  return (
    <Warper>
      <div className='flex justify-content-between align-items-center px-4 pt-4'>
        <h3 className='side__title'>Chats</h3>
        {/* <Button
          icon='pi pi-plus'
          className='p-button-rounded '
          aria-label='Filter'
          onClick={startNewChat}
        /> */}
      </div>
      <span className='p-input-icon-left w-full p-3'>
        <i className='pi pi-search px-4' />
        <RoundInput
          placeholder='search...'
          value={search}
          onChange={async (e) => {
            setSearch(e.target.value);
            const res = await axiosInstance.get(
              `users/searchFriends?name=${e.target.value}`
            );
            dispatch(setFriendState(res.data));
          }}
        />
      </span>
      <ContactList />
    </Warper>
  );
};

export default SideMenuChats;
