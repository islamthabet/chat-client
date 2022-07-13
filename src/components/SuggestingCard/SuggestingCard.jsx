import React from 'react';
import axiosInstance from '../../core/axios/axiosInstance';
import {Card, RoundButton} from './SuggestingCard.style';

const Suggesting = ({id, image, name, info}) => {
  return (
    <Card>
      <div className='suggesting__meta'>
        <img
          crossOrigin='anonymise'
          className='suggesting__image'
          src={image}
          alt=''
        />
        <div className='suggesting__titles'>
          <span className='suggesting__name'>{name} </span>
          <span className='suggesting__info'>{info} </span>
        </div>
      </div>
      <RoundButton
        label='Add'
        onClick={async () => {
          await axiosInstance.post(`users/sendFriendRequest/${id}`);
        }}
      />
    </Card>
  );
};

export default Suggesting;
