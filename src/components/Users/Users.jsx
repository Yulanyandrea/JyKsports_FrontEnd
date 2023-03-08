import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataUser } from '../../features/product/productSlice';
import Header from '../Header/Header';
import './style.css';

const Users = () => {
  const distpach = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    distpach(getDataUser());
  }, []);
  const userDataBase = useSelector((state) => state.products.usersDataBase);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/userDetails');
  };
  return (
    <section className="containerUsers">
      <Header />
      <h1 className="containerUsers__title">Empleados de JyK Sports</h1>
      <table className="containerUsers__table">
        <thead>
          <tr>
            <th className="containerUsers__table--head">Nombre </th>

          </tr>

        </thead>
        <tbody>
          {userDataBase.map((user) => {
            return (
              <tr>
                <tr key={user.id} />
                <td className="containerUsers__table--info">{user.firstName} {user.lastName}</td>
                <td className="containerUsers__table--buttonCss"><button type="submit" className="containerUsers__table--button" onClick={handleClick}>Detalles</button></td>
              </tr>
            );
          })}

        </tbody>
      </table>
      <div className="containerUsers__table--btn">
        <button type="submit" className="containerUsers__table--buttonEmployee">Agregar empleados</button>

      </div>
    </section>

  );
};

export default Users;
