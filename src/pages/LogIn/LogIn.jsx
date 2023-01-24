// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './style.css';
import jyk from '../../assets/jyk.jpeg';
import logInUser from '../../features/user/userSlice';

const LogIn = () => {
  // const dispatch = useDispatch();
  const [logIn, setLogIn] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser(logIn);
  };

  const handleChange = ({ target }) => {
    const key = target.name;
    setLogIn({ ...logIn, [key]: target.value });
  };
  console.log(logIn);

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
        <input type="password" className="LogInContainer__textPassword--input" name="password" onChange={handleChange} placeholder=" Password" />
      </div>
      <div className="LogInContainer__submit">
        <button type="submit" className="input__button" onClick={handleSubmit}> Ingresar</button>
      </div>

    </form>
  );
};
export default LogIn;
