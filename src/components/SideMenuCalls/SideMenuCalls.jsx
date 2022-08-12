import React from 'react';
import CallList from '../CallList/CallList';
import { Warper } from './SideMenuCalls.style';

const SideMenuCalls = () => {
  return (
    <Warper>
      <div className="flex justify-content-between align-items-center px-4 pt-4">
        <h3 className="side__title">Calls</h3>
      </div>
      <CallList />
    </Warper>
  );
};

export default SideMenuCalls;
