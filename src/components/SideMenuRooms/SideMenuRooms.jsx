import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogue, openDialogue } from '../../core/store/dialogue.slice';
import { RoundInput, Warper } from './SideMenuRooms.style';
import axiosInstance from '../../core/axios/axiosInstance';
import RoomList from '../RoomList/RoomList';
import { getProfileState } from '../../core/store/profile.slice';

const SideMenuRooms = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const createNewRoom = () => {
    dispatch(
      openDialogue({
        show: true,
        type: 'dialogue',
        title: 'Create New Room',
        content: <DialogueBody />,
        width: '300px',
        onAccept: () => {
          dispatch(closeDialogue());
        },
        onReject: () => {
          dispatch(closeDialogue());
        },
      }),
    );
  };

  return (
    <Warper>
      <div className="flex justify-content-between align-items-center px-4 pt-4">
        <h3 className="side__title">Rooms</h3>
        {/* <ReactTooltip /> */}
        <Button
          data-tip="Create New Room"
          icon="pi pi-plus"
          className="p-button-rounded "
          aria-label="Filter"
          onClick={createNewRoom}
        />
      </div>
      <span className="p-input-icon-left w-full p-3">
        <i className="pi pi-search px-4" />
        <RoundInput
          placeholder="search..."
          value={search}
          onChange={async (e) => {
            setSearch(e.target.value);
          }}
        />
      </span>
      <RoomList />
    </Warper>
  );
};

const DialogueBody = () => {
  const [formVal, setFormVal] = useState({ name: '', userPendingRequests: [] });
  const dispatch = useDispatch();
  const friends = useSelector(getProfileState).friends;
  const handelSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('rooms', formVal);
    setFormVal({ name: '', userPendingRequests: [] });
    dispatch(closeDialogue());
  };
  return (
    <form className="grid formgrid p-4" onSubmit={handelSubmit}>
      <div className="flex flex-column w-full">
        <label htmlFor="room-name">Name*</label>
        <InputText
          id="room-name"
          name="room-name"
          placeholder="Room Name"
          value={formVal.name}
          onChange={(e) => {
            setFormVal((prev) => {
              const obj = structuredClone(prev);
              obj.name = e.target.value;
              return obj;
            });
          }}
        />
      </div>
      <div className="flex flex-column w-full mt-4">
        <label htmlFor="room-members">Add Member</label>
        <MultiSelect
          options={friends}
          value={formVal.userPendingRequests}
          onChange={(e) =>
            setFormVal((perv) => {
              const obj = structuredClone(perv);
              obj.userPendingRequests = e.target.value;
              return obj;
            })
          }
          optionLabel="name"
          optionValue="id"
          placeholder="Add Member"
        />
        <Button label="submit" className="mt-4" />
      </div>
    </form>
  );
};

export default SideMenuRooms;
