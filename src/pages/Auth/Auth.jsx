import React from 'react';
import {Outlet} from 'react-router-dom';
import {Warper, Content} from './Auth.style';

const Auth = () => {
  return (
    <Warper>
      <Content>
        <Outlet />
      </Content>
    </Warper>
  );
};

export default Auth;
