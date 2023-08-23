import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import './style.css';

const DetailEmployee = () => {
  const [edit, setEdit] = useState(false);
  const { userId } = useParams();
  const employees = useSelector((state) => state.products.usersDataBase);

  const handleEditEmployee = (e) => {
    e.preventDefault();
    setEdit(true);
  };

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
                <button type="submit" className="DetailEmployee__section--btn" onClick={handleEditEmployee}>Editar</button>
                <button type="submit" className="DetailEmployee__section--btn">Eliminar empleado</button>

                {
                  edit === true ? (
                    <>
                      <input type="text" className="DetailEmployee__name--edit" placeholder="Nombre" />
                      <input type="text" className="DetailEmployee__name--edit" placeholder="Apellido" />
                      <input type="text" className="DetailEmployee__name--edit" placeholder="Cargo" />
                      <input type="text" className="DetailEmployee__name--edit" placeholder="Salario" />
                    </>
                  ) : null
                }
              </section>
            ) : null

          );
        })
      }

    </section>

  );
};
export default DetailEmployee;
