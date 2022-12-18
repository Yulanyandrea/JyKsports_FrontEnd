/* eslint-disable no-unused-vars */
import useForm from '../../hooks/useForm';
import './style.css';
import jyk from '../../assets/jyk.jpeg';

const LogIn = () => {
  const { form, handleChange } = useForm({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="LogInContainer">
      <header className="container__image--login">
        <img src={jyk} alt="" className="container__jyk--login" />
      </header>
      <div className="LogInContainer__email">
        <label htmlFor="email" className="email">Email</label>
        <input type="text" className="LogInContainer__email--input" name="email" onChange={handleChange} placeholder=" Email" />
      </div>
      <div className="LogInContainer__password">
        <label htmlFor="name" className="password">Password</label>
        <input type="text" className="LogInContainer__textPassword--input" name="password" onChange={handleChange} placeholder=" Password" />
      </div>
      <div className="LogInContainer__submit">
        <button type="submit" className="input__button" onClick={handleSubmit}> Ingresar</button>
      </div>

    </form>
  );
};
export default LogIn;
