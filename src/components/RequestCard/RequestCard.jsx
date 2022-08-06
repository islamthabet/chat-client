import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { Warper } from './RequestCard.style';
import axiosInstance from '../../core/axios/axiosInstance';
import socket from '../../core/socket/socket.client';
import { getProfileState, setProfileInfo } from '../../core/store/profile.slice';

const RequestCard = ({ id, image, name, country }) => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const acceptFriendRequest = async () => {
    await axiosInstance.patch(`${country ? 'users' : 'rooms'}/acceptRequest/${id}`);
    const updateProfile = structuredClone(profile);
    let requestedUser;

    updateProfile.sendRequest.filter((user) => {
      if (user._id === id) requestedUser = user;
      else return user;
    });
    updateProfile.sendRequest.splice(updateProfile.sendRequest.indexOf(requestedUser), 1);
    updateProfile.friends.push(requestedUser);
    dispatch(setProfileInfo(updateProfile));
    socket.emit('accept-friend-request', id);
  };
  const rejectFriendRequest = async () => {
    await axiosInstance.patch(`${country ? 'users' : 'rooms'}/rejectRequest/${id}`);
    const updateProfile = structuredClone(profile);
    const requestUser = updateProfile.sendRequest.filter((user) => {
      if (user._id !== id) return user;
    });
    updateProfile.sendRequest = requestUser;
    dispatch(setProfileInfo(updateProfile));
    socket.emit('reject-friend-request', id);
  };
  return (
    <Warper>
      <img src={image} alt={name} crossOrigin="anonymise" />
      <div className="request__card__info">
        <span className="request__card__info__name">{name}</span>
        <span className="request__card__info__country">{country}</span>
      </div>

      <div className="request__card__buttons">
        <Button
          icon="pi pi-check"
          className="p-button-rounded p-button-success"
          aria-label="Filter"
          onClick={acceptFriendRequest}
        />
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="Cancel"
          onClick={rejectFriendRequest}
        />
      </div>
    </Warper>
  );
};

export default RequestCard;
