import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Warper, Content } from './SideMenuFriendRequest.style';
import { getProfileState } from '../../core/store/profile.slice';
import RequestCard from '../RequestCard/RequestCard';

const SideMenuFriendRequest = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests([...profile.sendRequest, ...profile.askToJoinRoom]);
  }, [profile]);

  return (
    <Warper>
      <div className="flex justify-content-between align-items-center px-4 pt-4">
        <h3 className="side__title">Requests</h3>
      </div>
      <Content>
        {requests.map((req) => {
          return (
            <RequestCard
              key={req._id}
              image={req.image}
              id={req._id}
              name={req.name}
              country={req?.country?.title}
            />
          );
        })}
      </Content>
    </Warper>
  );
};

export default SideMenuFriendRequest;
