import React from 'react';
import {Button} from 'primereact/button';
import {Warper} from './RequestCard.style';
import axiosInstance from '../../core/axios/axiosInstance';

const RequestCard = ({id, image, name, country}) => {
  const acceptFriendRequest = async () => {
    await axiosInstance.patch(`users/acceptRequest/${id}`);
  };
  const rejectFriendRequest = async () => {
    await axiosInstance.patch(`users/rejectRequest/${id}`);
  };
  return (
    <Warper>
      <img src={image} alt={name} crossOrigin='anonymise' />
      <div className='request__card__info'>
        <span className='request__card__info__name'>{name}</span>
        <span className='request__card__info__country'>{country}</span>
      </div>

      <div className='request__card__buttons'>
        <Button
          icon='pi pi-check'
          className='p-button-rounded p-button-success'
          aria-label='Filter'
          onClick={acceptFriendRequest}
        />
        <Button
          icon='pi pi-times'
          className='p-button-rounded p-button-danger'
          aria-label='Cancel'
          onClick={rejectFriendRequest}
        />
      </div>
    </Warper>
  );
};

export default RequestCard;
