import { io } from 'socket.io-client';
import { Peer } from 'peerjs';

export const peer = new Peer();

export let peerId = null;

peer.on('open', (id) => {
  peerId = id;
});

const socket = io('http://localhost:5000/', {
  reconnectionDelayMax: 10000,
  auth: {
    token: localStorage.getItem('token'),
  },
  query: {
    user: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
  },
});

export default socket;
