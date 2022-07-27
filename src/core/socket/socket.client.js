import { io } from 'socket.io-client';

const socket = io('https://chat-2023.herokuapp.com', {
  reconnectionDelayMax: 10000,
  auth: {
    token: localStorage.getItem('token'),
  },
  query: {
    user: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
  },
});

export default socket;
