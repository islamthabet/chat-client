import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth';
import Login from '../../pages/Auth/Login/Login';
import Register from '../../pages/Auth/Register/Register';
import ChatBody from '../../pages/ChatBody/ChatBody';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';

const Routes = () => {
  const token = localStorage.getItem('token');
  return useRoutes([
    {
      path: 'auth',
      element: <Auth />,
      children: [
        { path: '', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '/',
      element: token ? <Home /> : <Navigate to="/auth" />,
      children: [{ path: ':type/:id', element: <ChatBody /> }],
    },
    { path: '*', element: <NotFound /> },
  ]);
};

export default Routes;
