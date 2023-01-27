/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const URL = process.env.REACT_APP_BASE_URL;

export const createProducts = async (product) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  };
  const res = await fetch(`${URL}/products`, options);
  const result = await res.json();
  return result;
};
