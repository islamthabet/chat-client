import React, {useState} from 'react';
import {Warper} from './ContactList.style';
import {useSelector} from 'react-redux';
import {getProfileState} from '../../core/store/profile.slice';
import ContactCard from '../ContactCard/ContactCard';
import {useEffect} from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const profile = useSelector(getProfileState);
  useEffect(() => {
    console.log(profile.friends);
    setContacts(profile.friends);
  }, [profile]);
  return (
    <Warper>
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            image={contact.image}
            email={contact.email}
            name={contact.name}
            lastMessage={contact.lastMessage}
            isActive={contact.isActive}
            notification={contact.notification}
            activeChat={contact.activeChat}
            id={contact.id}
          />
        );
      })}
    </Warper>
  );
};

export default ContactList;
