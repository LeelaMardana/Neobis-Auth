import axios from 'axios';

const BASE_URL = 'https://users-auth-api.onrender.com/api';
const API_URL_SIGNUP = '/signup';
const API_URL_SIGNIN = '/signin';
const API_URL_ME = '/users/me';
const API_URL_USERS = '/users';

// SignUp user
const signup = async userData => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNUP}`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

// SignIn user
const signin = async userData => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNIN}`, userData, {
    headers: { 'Content-Type': 'application/json' },
  });

  return response.data;
};

//users
const getUsers = async token => {
  const response = await axios.get(`${BASE_URL}${API_URL_USERS}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
//me
const getMe = async token => {
  const response = await axios.get(`${BASE_URL}${API_URL_ME}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const authService = {
  signup,
  signin,
};

export const getService = {
  getUsers,
  getMe,
};
