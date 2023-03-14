const BASE_URL = process.env.REACT_APP_BASE_URL;

const createEmployee = async (employee) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  };
  const res = await fetch(`${BASE_URL}/employee`, options);
  const result = await res.json();

  return result;
};

export default createEmployee;
