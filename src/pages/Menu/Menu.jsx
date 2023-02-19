import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import './style.css';

const Menu = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.products.users?.profile);
  const username2 = useSelector((state) => state.products.users);
  const userProfileP = useSelector((state) => state.products.users?.profile?.profilePicture);
  const userProfileData = useSelector((state) => state.products.users.profilePicture);

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
  return (
    <>
      <Header className="menuOptionTop__header" />
      <section className="menuOptionTop">

        { username ? <><img src={userProfileP} alt="" className="menuOptionTop__header--image" /><h2 className="menuOption__username">Hola {username?.userName}</h2></>

          : (
            <>
              <img src={userProfileData} alt="" className="menuOptionTop__header--image" />
              <h2 className="menuOption__username">Hola {username2?.userName}</h2>
            </>
          )}
      </section>
      <section className="menuOption">
        <div className="menuOption__buttons">
          <button type="submit" className="menuOption__add" onClick={handleQrRead}>Escanea el codigo QR</button>
          <button type="submit" className="menuOption__qr" onClick={handleSubmitQr}>Generar codigo QR</button>
          <button type="submit" className="menuOption__list" onClick={handleSubmitProduct}>Listar todos los productos</button>
          <button type="submit" className="menuOption__list" onClick={handleEditProfile}>Editar perfil</button>
        </div>

      </section>
    </>

  );
};
export default Menu;
