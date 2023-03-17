import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import './style.css';

const DetailEmployee = () => {
  const { userId } = useParams();
  const employees = useSelector((state) => state.products.usersDataBase);

  return (
    <section className="DetailEmployee">
      <Header />
      {
        employees.map((employee) => {
          return (
            employee._id === userId ? (
              <section className="DetailEmployee__section">
                <label htmlFor="name" className="DetailEmployee__name">Nombre</label>
                <label htmlFor="name" className="DetailEmployee__name--text">{employee.name} {employee.lastName}</label>
                <label htmlFor="name" className="DetailEmployee__name">Cargo</label>
                <label htmlFor="role" className="DetailEmployee__name--text">{employee.role}</label>
                <label htmlFor="name" className="DetailEmployee__name">Salario</label>
                <label htmlFor="role" className="DetailEmployee__name--text">{'$ '}{employee.pay}</label>
              </section>
            ) : null

          );
        })
      }

    </section>

  );
};
export default DetailEmployee;
