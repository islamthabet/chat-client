import React from 'react';
import {useState} from 'react';
import SuggestingCard from '../SuggestingCard/SuggestingCard';
import {Warper} from './SuggestingList.style';

import axiosInstance from '../../core/axios/axiosInstance';
import {useEffect} from 'react';

const SuggestingList = () => {
  const [suggesting, setSuggesting] = useState([]);
  const getUsers = async () => {
    const res = await axiosInstance.get('users/suggestFriend');
    setSuggesting(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Warper>
      {suggesting.map((suggest) => {
        return (
          <SuggestingCard
            key={suggest.id}
            id={suggest.id}
            image={suggest.image}
            name={suggest.name}
            info={suggest.country}
          />
        );
      })}
    </Warper>
  );
};

export default SuggestingList;
