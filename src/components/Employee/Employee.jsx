import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataUser } from '../../features/product/productSlice';
import Header from '../Header/Header';
import './style.css';

const Employee = () => {
  const distpach = useDispatch();
  useEffect(() => {
    distpach(getDataUser());
  }, []);
  const userDataBase = useSelector((state) => state.products.usersDataBase);

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
                <tr key={user._id} />
                <td className="containerUsers__table--info">{user.name} {user.lastName}</td>
                <td className="containerUsers__table--buttonCss">
                  <button type="submit" className="containerUsers__table--button" key={user._id}>
                    <Link to={`/employeeDetails/${user._id}`}>Detalles</Link>
                  </button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </section>

  );
};

export default Employee;
