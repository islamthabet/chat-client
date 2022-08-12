import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../core/axios/axiosInstance';
import { getProfileState } from '../../core/store/profile.slice';
import { Warper } from './CallList.style';

const CallList = () => {
  const profile = useSelector(getProfileState);
  const [calls, getCalls] = useState([]);
  const getData = async () => {
    const res = await axiosInstance.get('calls');
    getCalls(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Warper>
      {calls.map((call) => {
        return (
          <div className="call__card" key={call.id}>
            <img
              className="call__card__img"
              src={call.to._id === profile.id ? call.from.image : call.to.image}
              crossOrigin="anonymise"
            />
            <div className="call__card__info">
              <h4 className="call__card__info--name">
                {call.to._id === profile.id ? call.from.name : call.to.name}
              </h4>
            </div>
            <div className="call__card__times">
              <h6 className="call__card__times--date">
                {moment(call.createdAt).format('DD/MM/YYYY')}
              </h6>
              <h6>{call.duration != 0 ? `${call.duration}m` : call.status}</h6>
            </div>
          </div>
        );
      })}
    </Warper>
  );
};

export default CallList;
