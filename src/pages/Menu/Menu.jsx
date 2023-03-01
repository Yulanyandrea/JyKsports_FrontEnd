/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../features/product/productSlice';
import Header from '../../components/Header/Header';
import './style.css';

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.products.users?.profile);
  const userProfileP = useSelector((state) => state.products.users?.profile?.profilePicture);
  const currentDataUser = useSelector((state) => state.products.currentUser);

  useEffect(() => {
    if (currentDataUser) {
      dispatch(currentUser(currentDataUser));
    } else {
      dispatch(currentUser(username));
    }
  }, []);

  const handleSubmitProduct = (e) => {
    e.preventDefault(e);
    navigate('/products_DB');
  };

  const handleSubmitQr = (e) => {
    e.preventDefault(e);
    if (username.role === 'ADMIN') {
      navigate('/generate_qr');
    } else {
      navigate('/notAllow');
    }
  };

  const handleQrRead = (e) => {
    e.preventDefault(e);
    navigate('/readQrCode');
  };

  const handleEditProfile = (e) => {
    e.preventDefault(e);
    navigate('/editProfile');
  };

  const handleEmployees = (e) => {
    e.preventDefault();
    navigate('/userDataBase');
  };
  return (
    <>
      <Header className="menuOptionTop__header" />
      <section className="menuOptionTop">

        { currentDataUser ? <><img src={currentDataUser.profilePicture} alt="" className="menuOptionTop__header--image" /><h2 className="menuOption__username">Hola {currentDataUser?.userName}</h2></>

          : (
            <>
              <img src={userProfileP} alt="" className="menuOptionTop__header--image" />
              <h2 className="menuOption__username">Hola {username.userName}</h2>
            </>
          )}
      </section>
      <section className="menuOption">
        <div className="menuOption__buttons">
          <button type="submit" className="menuOption__add" onClick={handleQrRead}>Escanea el codigo QR</button>
          <button type="submit" className="menuOption__qr" onClick={handleSubmitQr}>Agregar productos</button>
          <button type="submit" className="menuOption__list" onClick={handleSubmitProduct}>Listar todos los productos</button>
          <button type="submit" className="menuOption__list" onClick={handleEditProfile}>Editar perfil</button>
          <button type="submit" className="menuOption__list" onClick={handleEmployees}>Empleados de Jyk Sports</button>
        </div>

      </section>
    </>

  );
};
export default Menu;
