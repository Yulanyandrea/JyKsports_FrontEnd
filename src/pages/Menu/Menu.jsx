import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './style.css';

const ejemplo = () => {
  const navigate = useNavigate();
  const handleSubmitProduct = (e) => {
    e.preventDefault(e);
    navigate('/products');
  };
  return (
    <>
      <Header />
      <section className="menuOption">
        <div className="menuOption__buttons">
          <button type="submit" className="menuOption__add">Agregar Nuevo producto</button>
          <button type="submit" className="menuOption__qr">Generar codigo QR</button>
          <button type="submit" className="menuOption__list" onClick={handleSubmitProduct}>Listar todos los productos</button>
        </div>

      </section>
    </>

  );
};
export default ejemplo;
