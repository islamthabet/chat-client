import React from 'react';
import {Button} from 'primereact/button';
import {useState} from 'react';
import ContactList from '../ContactList/ContactList';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import {Content, RoundInput, Warper} from './SideMenu.style';
import {useDispatch} from 'react-redux';
import {openDialogue} from '../../core/store/dialogue.slice';

const SideMenu = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const startNewChat = () => {
    dispatch(
      openDialogue({
        show: true,
        title: 'chats',
      })
    );
  };
  return (
    <Warper>
      <HeaderNavigation />
      <Content>
        <div className='flex justify-content-between align-items-center px-4 pt-4'>
          <h3 className='side__title'>Chats</h3>
          <Button
            icon='pi pi-plus'
            className='p-button-rounded '
            aria-label='Filter'
            onClick={startNewChat}
          />
        </div>
        <span className='p-input-icon-left w-full p-3'>
          <i className='pi pi-search px-4' />
          <RoundInput
            placeholder='search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
        <ContactList />
      </Content>
    </Warper>
  );
};

export default SideMenu;
