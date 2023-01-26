/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const API = process.env.REACT_APP_BASE_URL;
const BASE_URL_LOG = process.env.REACT_APP_USER_LOGIN;

export const getDataUsers = async () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/users`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logInUser = async (userData) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  };
  console.log(payload);
  try {
    const response = await fetch(BASE_URL_LOG, payload);
    const userRes = response.json();
    if (userRes?.token) {
      localStorage.setItem('token', userRes.token);
    }
  } catch (error) {
    console.error(error);
  }
};
