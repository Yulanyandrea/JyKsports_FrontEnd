import './style.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { resetSlice } from '../../features/product/productSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitHome = (e) => {
    e.preventDefault();
    navigate('/home');
  };
  const handleLogOut = (e) => {
    e.preventDefault(e);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(resetSlice());
    navigate('/');
  };
  return (
    <div className="headerMenu">
      <header className="header__image">
        <FontAwesomeIcon icon={faShoePrints} className="header__image--icon" />
        <h3 className="header__title">JyK Sports</h3>
      </header>
      <div className="headerMenuButton">
        <button type="submit" className="header__button--home" onClick={handleSubmitHome}>Inicio</button>
        <button type="submit" className="header__button--signOut" onClick={handleLogOut}>Cerrar Sesión</button>

      </div>

    </div>
  );
};

export default Header;
