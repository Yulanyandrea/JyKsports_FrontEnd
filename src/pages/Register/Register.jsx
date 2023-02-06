/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { createUser } from '../../services/user';

const Register = ({ image1 }) => {
  const url = process.env.REACT_APP_BASE_URL;

  const { form, handleChange } = useForm({});

  // upload image
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);

  const navigate = useNavigate();

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);

    // connect to back end
    const options = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch(`${url}/upload/file`, options);
    const data = await response.json();
    setImg(data.url);

    try {
      const res = await createUser({ ...form, profilePicture: data.url });
    } catch (error) {
      console.error(error);
    }
    navigate('/login');
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <div className="input__profile">
        {img ? <img src={img} className="input__image" alt="" /> : <img src={image1} className="input__image" alt="" /> }
        <input type="file" className="input__Selectimage" name="profilePicture" onChange={handleChangeImage} />
      </div>
      <div className="input__name">
        <label htmlFor="name" className="title">Nombre</label>
        <input type="text" className="input__textName" name="firstName" onChange={handleChange} placeholder="Ingrese nombre" />
      </div>

      <div className="input__lastname">
        <label htmlFor="name" className="title">Apellido</label>
        <input type="text" className="input__textName" name="lastName" onChange={handleChange} placeholder="Ingrese apellido" />
      </div>

      <div className="input__email">
        <label htmlFor="name" className="title">Email</label>
        <input type="email" className="input__textName" name="email" onChange={handleChange} placeholder="Ingrese email" />
      </div>

      <div className="input__username">
        <label htmlFor="name" className="title">Nombre de usuario</label>
        <input type="text" className="input__textName" name="userName" onChange={handleChange} placeholder="Ingrese usuario" />
      </div>

      <div className="input__password">
        <label htmlFor="name" className="title">contraseña</label>
        <input type="password" className="input__textName" name="password" onChange={handleChange} placeholder="Ingrese contraseña" />
      </div>

      <div className="input__role">
        <select name="roles" id="" aria-label="roles" onChange={handleChange} className="input__select">
          <option value="null"> </option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
      </div>

      <div className="input__submit">
        <button type="submit" className="input__button"> Registrarse</button>
      </div>

    </form>
  );
};

// Register.prototype = {
//   image: PropTypes.string.isRequired,
// };
export default Register;
