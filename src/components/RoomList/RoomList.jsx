import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../core/axios/axiosInstance';
import { getRoomsState, setRoomsState } from '../../core/store/room.slice';
import RoomCard from '../RoomCard/RoomCard';
import { Warper } from './RoomList.style';

const RoomList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(getRoomsState);
  const getRooms = async () => {
    const res = await axiosInstance.get('rooms/myRooms');
    dispatch(setRoomsState(res.data));
  };

  useEffect(() => {
    getRooms();
  }, []);
  return (
    <Warper>
      {rooms.map((room) => {
        return (
          <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            image={room.image}
            members={room.members}
            admins={room.admins}
            createdBy={room.createdBy}
            userPendingRequests={room.userPendingRequests}
          />
        );
      })}
    </Warper>
  );
};

export default RoomList;
