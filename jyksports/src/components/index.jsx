import jyk from '../assets/jyk.jpeg';
import './style.css';

function Home() {
  return (
    <div className="container">
      <header className="container__image">
        <img src={jyk} alt="" className="container__jyk" />
      </header>
      <h1 className="container__name">JyK Sports</h1>
      <section className="container__home">
        <h2 className="container__title">Bienvenido</h2>
        <section className="container__buttons">
          <button type="submit" className="container__register">Registrarse</button>
        </section>
        <button type="submit" className="container__logIn">Ingresar</button>
      </section>

      <section className="main">
        <div className="dog">
          <div className="dog__paws">
            <div className="dog__bl-leg leg">
              <div className="dog__bl-paw paw" />
              <div className="dog__bl-top top" />
            </div>
            <div className="dog__fl-leg leg">
              <div className="dog__fl-paw paw" />
              <div className="dog__fl-top top" />
            </div>
            <div className="dog__fr-leg leg">
              <div className="dog__fr-paw paw" />
              <div className="dog__fr-top top" />
            </div>
          </div>
          <div className="dog__body">
            <div className="dog__tail" />
          </div>
          <div className="dog__head">
            <div className="dog__snout">
              <div className="dog__nose" />
              <div className="dog__eyes">
                <div className="dog__eye-l" />
                <div className="dog__eye-r" />
              </div>
            </div>
          </div>
          <div className="dog__head-c">
            <div className="dog__ear-l" />
            <div className="dog__ear-r" />
          </div>
        </div>
      </section>

    </div>

  );
}
export default Home;
