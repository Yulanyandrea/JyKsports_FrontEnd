import { useSelector } from 'react-redux';
import Header from '../Header/Header';

const Users = () => {
  const userDataBase = useSelector((state) => state.products.productsDataBase);
  return (
    <section className="containerUsers">
      <Header />
      <h1 className="containerUsers__title">Empleados de JyK Sports</h1>
      <table className="containerUsers__table">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>{userDataBase.firstName}{userDataBase.lastName}</td>
            <td><button type="submit">Detalles</button></td>
          </tr>
        </tbody>
      </table>

    </section>

  );
};

export default Users;
