import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Warper, Content} from './SideMenuFriendRequest.style';
import {useSelector} from 'react-redux';
import {getProfileState} from '../../core/store/profile.slice';
import RequestCard from '../RequestCard/RequestCard';

const SideMenuFriendRequest = () => {
  const profile = useSelector(getProfileState);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(profile.sendRequest);
  }, [profile]);
  return (
    <Warper>
      <div className='flex justify-content-between align-items-center px-4 pt-4'>
        <h3 className='side__title'>Friend Requests</h3>
      </div>
      <Content>
        {requests.map((req) => {
          return (
            <RequestCard
              key={req.id}
              image={req.image}
              id={req.id}
              name={req.name}
              country={req.country}
            />
          );
        })}
      </Content>
    </Warper>
  );
};

export default SideMenuFriendRequest;
