/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const API = process.env.REACT_APP_BASE_URL;

export const getDataEmployee = async () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/employee`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
