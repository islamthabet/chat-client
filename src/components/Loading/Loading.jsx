import React, { useEffect } from 'react';
import { Warper } from './Loading.style';
import { useSelector } from 'react-redux';
import { getLoadingState } from '../../core/store/loading.slice';

const Loading = () => {
  const loading = useSelector(getLoadingState);
  return (
    <>
      {loading && (
        <Warper>
          <figure>
            <div className="loading__dot loading--white"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
          </figure>
        </Warper>
      )}
    </>
  );
};

export default Loading;
