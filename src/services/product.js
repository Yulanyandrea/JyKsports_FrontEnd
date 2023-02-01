const URL = process.env.REACT_APP_BASE_URL;

export const createProducts = async (product) => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  };
  const res = await fetch(`${URL}/products`, options);
  const result = await res.json();
  return result;
};

export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),

  };

  const response = await fetch(`${URL}/products/${id}`, payload);
  const data = await response.json();
  return (data);
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');
  const payload = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id),
  };
  const res = await fetch(`${URL}/products/${id}`, payload);
  const data = await res.json();
  return data;
};
