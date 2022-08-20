import axios from 'axios';
import { toast } from 'react-toastify';
import { setLoadingState } from '../store/loading.slice';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/',
  baseURL: 'https://chat-2023.herokuapp.com/api/v1/',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  setLoadingState(true);
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    switch (err.response.data.statusCode) {
      case 400:
        // for multi err message
        if (Array.isArray(err.response.data.message))
          err.response.data.message.forEach((message) => {
            toast.error(message, {
              toastId: message.replaceAll(' ', '_'),
            });
          });
        // for single err message
        if (typeof err.response.data.message === 'string')
          toast.error(err.response.data.message, {
            toastId: err.response.data.message.replaceAll(' ', '_'),
          });
        break;
      case 401:
        toast.error(err.response.data.message, {
          toastId: err.response.data.message.replaceAll(' ', '_'),
        });
        localStorage.clear();
        location.assign('auth');
        break;
      case 500:
        toast.error('something went wrong');
        break;
      case 404:
        toast.error('No Page Here');
        break;
      default:
        toast.error(err.response.data.message);
        break;
    }

    setLoadingState(false);
    Promise.reject(err);
  },
);

export default axiosInstance;
