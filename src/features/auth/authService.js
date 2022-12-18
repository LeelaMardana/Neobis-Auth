import axios from 'axios';

const BASE_URL = 'https://users-auth-api.onrender.com/api';
const API_URL_SIGNUP = '/signup';
const API_URL_SIGNIN = '/signin';

// SignUp user
const signup = async userData => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNUP}`, userData, {
    headers: { 'Content-Type': 'application/json' },
  });

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }

  return response.data;
};

// SignIn user
const signin = async userData => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNIN}`, userData, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  signup,
  signin,
};

export default authService;
