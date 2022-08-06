import React from 'react';
import { Warper } from './ContactList.style';
import { useSelector } from 'react-redux';
import ContactCard from '../ContactCard/ContactCard';
import { getProfileState } from '../../core/store/profile.slice';

const ContactList = () => {
  const friends = useSelector(getProfileState).friends;
  return (
    <Warper>
      {friends.map((friend) => {
        return (
          <ContactCard
            key={friend.id}
            image={friend.image}
            email={friend.email}
            name={friend.name}
            lastMessage={friend.lastMessage}
            lastSeen={friend.lastSeen}
            notification={friend.notification}
            id={friend.id}
          />
        );
      })}
    </Warper>
  );
};

export default ContactList;
