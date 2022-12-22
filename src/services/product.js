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
export const getAllProducts = async () => {
  const res = await fetch(`${URL}/products`);
  const result = await res.json();
  return result;
};
