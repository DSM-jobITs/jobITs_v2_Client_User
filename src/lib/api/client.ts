import axios from 'axios';
import { baseURL } from '../../const';

export const client = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getClientAccessToken = () => 
  axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});