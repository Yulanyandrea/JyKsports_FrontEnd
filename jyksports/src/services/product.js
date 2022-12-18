const URL = process.env.REACT_APP_BASE_URL;

async function getAllProducts() {
  const res = await fetch(`${URL}/products`);
  const result = await res.json();
  return result;
}
export default getAllProducts;
