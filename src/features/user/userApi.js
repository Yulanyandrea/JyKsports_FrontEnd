/* eslint-disable consistent-return */
const API = process.env.REACT_APP_BASE_URL;
const getDataUsers = async () => {
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

export default getDataUsers;
