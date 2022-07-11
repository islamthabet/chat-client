import React from 'react';
import ChatInfo from '../ChatInfo/ChatInfo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import {HeaderStyle} from './Header.style';

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <h2>Chat App</h2>
          </li>
          <li>
            <h4 className='select-none'>Create Memorable talks</h4>
          </li>
        </ul>
      </nav>
      {/* <div className='header__sub-header--warper'>
        <HeaderNavigation />
        <ChatInfo />
      </div> */}
    </HeaderStyle>
  );
};

export default Header;
