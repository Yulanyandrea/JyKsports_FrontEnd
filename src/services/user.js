const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL_LOG = process.env.REACT_APP_USER_LOGIN;

export const createUser = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(`${BASE_URL}/users`, options);
  const result = await res.json();

  return result;
};

export const getAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const data = await res.json();
  return data;
};

export const getUserId = async (id) => {
  const res = await fetch(`${BASE_URL}/api/users/${id}`);
  const data = await res.json();
  return data;
};

export const updateUser = async (user) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),

  };

  const response = await fetch(`${BASE_URL}/api/users/${user.id}`, payload);
  const data = await response.json();
  return (data);
};

export const deleteUser = async (id) => {
  const payload = {
    method: 'DELETE',
  };
  const res = await fetch(`${BASE_URL}/api/users/${id}`, payload);
  const data = await res.json();
  return data;
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
