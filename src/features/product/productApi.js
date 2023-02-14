/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const BASE = process.env.REACT_APP_BASE_URL;

export const getProducts = async (filters) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),

  };
  const url = filters
    ? `${BASE}/products/filter?brand=${filters.brand}&size=${filters.size}&color=${filters.color}`
    : `${BASE}/products`;
  try {
    const response = await fetch(url, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllProducts = async () => {
  const res = await fetch(`${BASE}/products`);
  const data = await res.json();
  return data;
};
