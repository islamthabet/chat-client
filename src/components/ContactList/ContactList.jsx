import React from 'react';
import {useState} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import {Warper} from './ContactList.style';
import profile from '../../assets/profile.jpg';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
      activeChat: true,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
    {
      img: profile,
      name: 'islam mohammed',
      lastMessage: {
        message: 'i love yoyo',
        date: '1-1-2020',
      },
      isActive: true,
      notification: 3,
    },
  ]);
  return (
    <Warper>
      {contacts.length > 0 &&
        contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              img={contact.img}
              name={contact.name}
              lastMessage={contact.lastMessage}
              isActive={contact.isActive}
              notification={contact.notification}
              activeChat={contact.activeChat}
            />
          );
        })}
    </Warper>
  );
};

export default ContactList;
