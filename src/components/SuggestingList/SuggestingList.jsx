import React from 'react';
import {useState} from 'react';
import SuggestingCard from '../SuggestingCard/SuggestingCard';
import {Warper} from './SuggestingList.style';
import profile from '../../assets/profile.jpg';

const SuggestingList = () => {
  const [suggesting, setSuggesting] = useState([
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
    {
      image: profile,
      name: 'rahmaa',
      info: '12 mutuals',
    },
  ]);
  return (
    <Warper>
      {suggesting.map((suggest, index) => {
        return (
          <SuggestingCard
            key={index}
            image={suggest.image}
            name={suggest.name}
            info={suggest.info}
          />
        );
      })}
    </Warper>
  );
};

export default SuggestingList;
