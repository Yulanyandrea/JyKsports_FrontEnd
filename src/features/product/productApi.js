/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const URL = process.env.REACT_APP_BASE_URL;

export const getProducts = async () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),

  };
  try {
    const response = await fetch(`${URL}/products`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const filterProducts = async (query) => {
  const res = await fetch(`${URL}/products/filter?brand=${query.brand}&size=${query.size}&color=${query.color}`);
  const data = await res.json();
  return data;
};
