/* eslint-disable no-unused-vars */
import useForm from '../../hooks/useForm';
import './style.css';

const LogIn = () => {
  const { form, handleChange } = useForm({});
  return (
    <form className="LogInContainer">
      <div className="LogInContainer__email">
        <label htmlFor="email" className="email">Email</label>
        <input type="text" className="LogInContainer__email--input" name="email" onChange={handleChange} placeholder="Ingrese email" />
      </div>
      <div className="LogInContainer__password">
        <label htmlFor="name" className="password">Password</label>
        <input type="text" className="LogInContainer__textPassword--input" name="password" onChange={handleChange} placeholder="Ingrese contraseña" />
      </div>
      <div className="LogInContainer__submit">
        <button type="submit" className="input__button"> Ingresar</button>
      </div>

    </form>
  );
};
export default LogIn;
