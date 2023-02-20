import Header from '../../components/Header/Header';
import './style.css';

const NotAllow = () => {
  return (
    <>
      <Header />
      <article className="ContainerNotAllow">
        <h1 className="ContainerNotAllow__title">No estas autorizado para ver esta pagina</h1>
        <p className="ContainerNotAllow__text">Solo los administradores pueden agregar nuevos productos y generar el codigo QR</p>
        <img src="/images/cannot.gif" alt="" className="ContainerNotAllow__image" width="350" />
      </article>
    </>

  );
};

export default NotAllow;
