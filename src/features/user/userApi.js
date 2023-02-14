/* eslint-disable consistent-return */
const API = process.env.REACT_APP_BASE_URL;
const APIUSER = process.env.REACT_APP_USER_LOGIN;

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

  try {
    const response = await fetch(APIUSER, payload);
    const user = await response.json();
    if (user?.token) {
      localStorage.setItem('token', user.token);
    }
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};
