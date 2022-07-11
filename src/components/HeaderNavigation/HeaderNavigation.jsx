import React from 'react';
import {AiTwotoneMessage} from 'react-icons/ai';
import {RiPhoneFill} from 'react-icons/ri';
import {FaEnvelope, FaUsers} from 'react-icons/fa';
import {Warper} from './HeaderNavigation.style';
import {useSelector} from 'react-redux';
import {getProfileState} from '../../core/store/profile.slice';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const HeaderNavigation = () => {
  const profile = useSelector(getProfileState);
  return (
    <Warper>
      <AiTwotoneMessage />
      <RiPhoneFill />
      <FaEnvelope />
      <FaUsers />
      <div className='profile__dropdown'>
        <img src={profile.image} crossOrigin='anonymise' about='alt' />
        <div className='profile__dropdown__hidden-menu'>
          <ProfileMenu />
        </div>
      </div>
    </Warper>
  );
};

export default HeaderNavigation;
