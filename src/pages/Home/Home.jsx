import { useNavigate } from 'react-router-dom';
import jyk from '../../assets/jyk.jpeg';
import './style.css';
import Dog from '../../components/Dog/Dog';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  const handleClickButton2 = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <header className="container__image">
        <img src={jyk} alt="" className="container__jyk" />
      </header>
      <h1 className="container__name">JyK Sports</h1>
      <section className="container__home">
        <h2 className="container__title">Bienvenido</h2>
        <section className="container__buttons">
          <button type="submit" className="container__register" onClick={handleClick}>Registrarse</button>
        </section>
        <button type="submit" className="container__logIn" onClick={handleClickButton2}>Ingresar</button>
      </section>
      <Dog />
    </div>

  );
};
export default Home;
