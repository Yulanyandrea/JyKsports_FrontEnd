import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import './style.css';

const ejemplo = () => {
  const username = useSelector((state) => state.products.users?.profile?.userName);
  const userProfile = useSelector((state) => state.products.users?.profile?.profilePicture);
  const navigate = useNavigate();
  const handleSubmitProduct = (e) => {
    e.preventDefault(e);
    navigate('/products_DB');
  };

  const handleSubmitQr = (e) => {
    e.preventDefault(e);
    navigate('/generate_qr');
  };

  const handleQrRead = (e) => {
    e.preventDefault(e);
    navigate('/readQrCode');
  };
  return (
    <>
      <Header className="menuOptionTop__header" />
      <section className="menuOptionTop">
        <img src={userProfile} alt="" className="menuOptionTop__header--image" />
        <h2 className="menuOption__username">Hola {username}</h2>
      </section>
      <section className="menuOption">
        <div className="menuOption__buttons">
          <button type="submit" className="menuOption__add" onClick={handleQrRead}>Escanea el codigo QR</button>
          <button type="submit" className="menuOption__qr" onClick={handleSubmitQr}>Generar codigo QR</button>
          <button type="submit" className="menuOption__list" onClick={handleSubmitProduct}>Listar todos los productos</button>
        </div>

      </section>
    </>

  );
};
export default ejemplo;
