const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  return data;
};

export const getUserId = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  const data = await res.json();
  return data;
};

export const updateUser = async (user) => {
  const id = JSON.parse(localStorage.getItem('user'));
  const id2 = id.profile._id;
  const id3 = id._id;
  console.log(id);
  const url = id2 ? `${BASE_URL}/users/${id2}` : `${BASE_URL}/users/${id3._id}`;
  const payload = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),

  };

  const response = await fetch(url, payload);
  const data = await response.json();
  return (data);
};

export const deleteUser = async (id) => {
  const payload = {
    method: 'DELETE',
  };
  const res = await fetch(`${BASE_URL}/users/${id}`, payload);
  const data = await res.json();
  return data;
};
