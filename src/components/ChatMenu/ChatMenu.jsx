import React, { useEffect, useRef, useState } from 'react';
import { Warper } from './ChatMenu.style';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogue, openDialogue } from '../../core/store/dialogue.slice';
import axiosInstance from '../../core/axios/axiosInstance';
import { getActiveChatState, resetActiveChat } from '../../core/store/activeChat.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfileState, setProfileInfo } from '../../core/store/profile.slice';
import { getRoomsState, setRoomsState } from '../../core/store/room.slice';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';

const ChatMenu = ({ showMenu, setShowMenu }) => {
  const chatMenu = useRef();
  const navigate = useNavigate();
  const { type } = useParams();
  const activeChat = useSelector(getActiveChatState);
  const profile = useSelector(getProfileState);
  const rooms = useSelector(getRoomsState);
  const dispatch = useDispatch();
  const closeMenu = (e) => {
    if (
      !e?.path?.includes(chatMenu.current) &&
      !e?.path?.includes(document.querySelector('#open-chat-dots'))
    ) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, [chatMenu.current]);
  return (
    <Warper showMenu={showMenu}>
      <section ref={chatMenu}>
        {type === 'user' && (
          <div
            onClick={() => {
              dispatch(
                openDialogue({
                  show: true,
                  type: 'confirm',
                  title: 'unfriend',
                  content: 'are you sure you want to un friend',
                  onAccept: async () => {
                    await axiosInstance.patch(`users/unfriend/${activeChat.id}`);
                    dispatch(closeDialogue());
                    const newProfile = structuredClone(profile);
                    const newFriends = newProfile.friends.filter((friend) => {
                      if (friend.id !== activeChat.id) return friend;
                    });
                    newProfile.friends = newFriends;
                    dispatch(setProfileInfo(newProfile));
                    dispatch(resetActiveChat());
                    navigate('/');
                    setShowMenu(false);
                  },
                  onReject: () => {
                    dispatch(closeDialogue());
                  },
                }),
              );
            }}
          >
            unFriend
          </div>
        )}

        {type === 'room' && (
          <div
            onClick={() => {
              dispatch(
                openDialogue({
                  show: true,
                  type: 'confirm',
                  title: 'Leave the room',
                  content: 'are you sure you want to leave the room',
                  onAccept: async () => {
                    await axiosInstance.patch(`rooms/leaveRoom/${activeChat.id}`);
                    dispatch(closeDialogue());
                    const newRooms = rooms.filter((room) => {
                      if (room.id !== activeChat.id) return room;
                    });
                    dispatch(setRoomsState(newRooms));
                    dispatch(resetActiveChat());
                    navigate('/');
                    setShowMenu(false);
                  },
                  onReject: () => {
                    dispatch(closeDialogue());
                  },
                }),
              );
            }}
          >
            Leave the room
          </div>
        )}

        {type === 'room' && activeChat?.createdBy?.id === profile?.id && (
          <div
            onClick={() => {
              setShowMenu(false);
              dispatch(
                openDialogue({
                  show: true,
                  type: 'dialogue',
                  title: 'Add Users',
                  content: <AddUser type="users" />,
                  onAccept: async () => {
                    dispatch(closeDialogue());
                  },
                  onReject: () => {
                    dispatch(closeDialogue());
                  },
                }),
              );
            }}
          >
            Add user
          </div>
        )}

        {type === 'room' && activeChat?.createdBy?.id === profile?.id && (
          <div
            onClick={() => {
              setShowMenu(false);
              dispatch(
                openDialogue({
                  show: true,
                  type: 'dialogue',
                  title: 'Add Admins',
                  content: <AddUser type="admins" />,
                  onAccept: async () => {
                    dispatch(closeDialogue());
                  },
                  onReject: () => {
                    dispatch(closeDialogue());
                  },
                }),
              );
            }}
          >
            Add Admins
          </div>
        )}

        {type === 'room' && activeChat?.createdBy?.id === profile?.id && (
          <div
            onClick={() => {
              setShowMenu(false);
              dispatch(
                openDialogue({
                  show: true,
                  type: 'confirm',
                  title: 'Delete Room',
                  content: 'Are You Sure You Want To Delete This Room',
                  onAccept: async () => {
                    dispatch(closeDialogue());
                    await axiosInstance.delete(`rooms/${activeChat.id}`);
                    dispatch(resetActiveChat());
                    navigate('/');
                    setShowMenu(false);
                  },
                  onReject: () => {
                    dispatch(closeDialogue());
                    setShowMenu(false);
                  },
                }),
              );
            }}
          >
            Delete Room
          </div>
        )}

        <div
          onClick={() => {
            setShowMenu(false);
            dispatch(resetActiveChat());
            navigate('/');
          }}
        >
          close chat
        </div>
      </section>
    </Warper>
  );
};

const AddUser = ({ type }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { friends } = useSelector(getProfileState);
  const activeChat = useSelector(getActiveChatState);
  useEffect(() => {
    const roomMemberIds = activeChat.members.map((user) => user._id);
    const roomAdminsIds = activeChat.admins.map((user) => user._id);
    setUsers(
      friends.filter((friend) => {
        if (type === 'users') {
          if (
            !roomMemberIds.includes(friend.id) &&
            !activeChat.userPendingRequests.includes(friend.id)
          )
            return friend;
        } else {
          if (roomMemberIds.includes(friend.id) && !roomAdminsIds.includes(friend._id))
            return friend;
        }
      }),
    );
  }, []);

  return (
    <div className="flex flex-column gap-3 mt-3">
      <MultiSelect
        value={selectedUsers}
        options={users}
        onChange={(e) => setSelectedUsers(e.value)}
        optionLabel="name"
        optionValue="id"
        placeholder="Add Users"
        maxSelectedLabels={3}
        filter
      />
      <Button
        label="submit"
        onClick={async () => {
          await axiosInstance.patch(
            `rooms/${type === 'users' ? 'addUsers' : 'makeAnAdmins'}/${activeChat.id}`,
            { usersIds: selectedUsers },
          );
          dispatch(closeDialogue());
        }}
      />
    </div>
  );
};

export default ChatMenu;
