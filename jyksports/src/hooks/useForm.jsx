/* eslint-disable no-unused-vars */
import { useState } from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState({});
  const handleChange = ({ target }) => {
    const key = target.name;
    setForm({ ...form, [key]: target.value }); // haga una copia y guarde la info
  };
  return {
    form,
    handleChange,
  };
};
export default useForm;
