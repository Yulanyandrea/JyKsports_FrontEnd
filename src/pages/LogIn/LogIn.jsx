/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../features/product/productSlice';
import useForm from '../../hooks/useForm';
import './style.css';
import jyk from '../../assets/jyk.jpeg';

const LogIn = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataError, setDataError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(form).length < 2) {
        setDataError('*Este campo es requerido');
      } else {
        const response = await dispatch(loginUser(form));
        if (response.payload.message === 'Invalid email or password') {
          setIsOpen(!isOpen);
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="LogInContainer">
      <header className="container__image--login">
        <img src={jyk} alt="" className="container__jyk--login" />
      </header>
      <div className="LogInContainer__email">
        <label htmlFor="email" className="email">Email</label>
        <input type="text" className="LogInContainer__email--input" name="email" onChange={handleChange} placeholder=" Email" />
        {dataError ? <span className="error">{dataError}</span> : null}
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <p className="modal__text">Email o contraseña invalidos</p>
              <button className="modal__button" type="submit" onClick={handleModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
      <div className="LogInContainer__password">
        <label htmlFor="name" className="password">Password</label>
        <input type="password" className="LogInContainer__textPassword--input" name="password" onChange={handleChange} placeholder=" Password" />
        {dataError ? <span className="error">{dataError}</span> : null}
      </div>
      <div className="LogInContainer__submit">
        <button type="submit" className="input__button" onClick={handleSubmit}> Ingresar</button>
      </div>

    </form>
  );
};
export default LogIn;
