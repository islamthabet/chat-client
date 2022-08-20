import React, { useEffect, useRef } from 'react';
import { AiTwotoneMessage } from 'react-icons/ai';
import { RiPhoneFill } from 'react-icons/ri';
import { FaUserClock, FaUsers } from 'react-icons/fa';
import { Warper } from './HeaderNavigation.style';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileState } from '../../core/store/profile.slice';
import { OverlayPanel } from 'primereact/overlaypanel';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { getActiveSlideState, setActiveSlideState } from '../../core/store/activeSlide.slice';
import { useLocation } from 'react-router-dom';

const HeaderNavigation = () => {
  const op = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = useSelector(getProfileState);
  const activeSection = useSelector(getActiveSlideState);
  useEffect(() => {
    if (location.pathname.includes('user')) dispatch(setActiveSlideState(1));
    else if (location.pathname.includes('room')) dispatch(setActiveSlideState(3));
  }, [location]);

  return (
    <Warper>
      <AiTwotoneMessage
        className={activeSection === 1 && 'active'}
        onClick={() => dispatch(setActiveSlideState(1))}
      />
      {/* <RiPhoneFill
        className={activeSection === 2 && 'active'}
        onClick={() => dispatch(setActiveSlideState(2))}
      /> */}
      {/* <FaUsers
        className={activeSection === 3 && 'active'}
        onClick={() => dispatch(setActiveSlideState(3))}
      /> */}
      <FaUserClock
        className={activeSection === 4 && 'active'}
        onClick={() => dispatch(setActiveSlideState(4))}
      />
      <div className="profile__dropdown">
        <img
          src={profile.image}
          crossOrigin="anonymise"
          about="alt"
          onClick={(e) => op.current.toggle(e)}
        />
        <OverlayPanel ref={op}>
          <ProfileMenu parent={op} />
        </OverlayPanel>
      </div>
    </Warper>
  );
};

export default HeaderNavigation;
