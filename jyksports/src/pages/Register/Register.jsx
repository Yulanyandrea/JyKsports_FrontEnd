/* eslint-disable react/prop-types */
import './style.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { createUser } from '../../services/user';

const Register = (props) => {
  const { image } = props;
  const { form, handleChange } = useForm({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser(form);
      console.log(res);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <div className="input__profile">
        <img src={image} alt="" className="input__image" />
      </div>
      <div className="input__name">
        <label htmlFor="name" className="title">Nombre</label>
        <input type="text" className="input__textName" name="name" onChange={handleChange} placeholder="Ingrese nombre" />
      </div>

      <div className="input__lastname">
        <label htmlFor="name" className="title">Apellido</label>
        <input type="text" className="input__textName" name="lastname" onChange={handleChange} placeholder="Ingrese apellido" />
      </div>

      <div className="input__email">
        <label htmlFor="name" className="title">Email</label>
        <input type="email" className="input__textName" name="email" onChange={handleChange} placeholder="Ingrese email" />
      </div>

      <div className="input__username">
        <label htmlFor="name" className="title">Nombre de usuario</label>
        <input type="text" className="input__textName" name="username" onChange={handleChange} placeholder="Ingrese usuario" />
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

Register.prototype = {
  image: PropTypes.string.isRequired,
};
export default Register;
