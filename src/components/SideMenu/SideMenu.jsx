import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import { Warper } from './SideMenu.style';
import { useSelector } from 'react-redux';
import { getActiveSlideState } from '../../core/store/activeSlide.slice';
import SideMenuChats from '../SideMenuChats/SideMenuChats';
import SideMenuFriendRequest from '../SideMenuFriendRequest/SideMenuFriendRequest';
import SideMenuRooms from '../SideMenuRooms/SideMenuRooms';

const SideMenu = () => {
  const activeSection = useSelector(getActiveSlideState);
  return (
    <Warper>
      <HeaderNavigation />
      {activeSection === 1 && <SideMenuChats />}
      {activeSection === 3 && <SideMenuRooms />}
      {activeSection === 4 && <SideMenuFriendRequest />}
    </Warper>
  );
};

export default SideMenu;
