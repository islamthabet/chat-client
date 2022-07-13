import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Warper} from './NewChat.style';
import {useSelector} from 'react-redux';
import {getProfileState} from '../../core/store/profile.slice';
import FriendCard from '../FriendCard/FriendCard';

const NewChat = () => {
  const [friends, setFriends] = useState([]);
  const profile = useSelector(getProfileState);

  useEffect(() => {
    setFriends(profile.friends);
  }, [profile]);
  return (
    <Warper>
      {friends.map((friend) => {
        return (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            email={friend.email}
            image={friend.image}
          />
        );
      })}
    </Warper>
  );
};

export default NewChat;
