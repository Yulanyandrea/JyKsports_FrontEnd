import { useState } from 'react';
import useForm from '../../hooks/useForm';
import Header from '../../components/Header/Header';
import './style.css';
import createEmployee from '../../services/employee';

const AddUser = () => {
  const { form, handleChange } = useForm({});
  const [payment, setPayment] = useState();

  // modal
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = async (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(form).length < 10) {
      setIsOpen(!isOpen);
    } else {
      try {
        const response = await createEmployee(form);
        await setPayment(response.pay);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Header />
      <form className="ContainerAddUser" onSubmit={handleSubmit}>
        <div className="ContainerAddUser__inputs">
          <label htmlFor="name" className="title">Nombre</label>
          <input type="text" className="ContainerAddUser__textName" name="name" placeholder="Ingrese nombre" onChange={handleChange} />

          <label htmlFor="lastName" className="title">Apellido</label>
          <input type="text" className="ContainerAddUser__textName" name="lastName" placeholder="Ingrese apellido" onChange={handleChange} />

          <label htmlFor="charge" className="title">Cargo</label>
          <input type="text" className="ContainerAddUser__textName" name="role" placeholder="Ingrese cargo" onChange={handleChange} />

        </div>

        <div className="ContainerAddUser__week">
          <label htmlFor="name" className="title">Lunes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workMonday" onChange={handleChange} />
          <label htmlFor="name" className="title">Martes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workTuesday" onChange={handleChange} />
          <label htmlFor="name" className="title">Miercoles</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workWednesday" onChange={handleChange} />
          <label htmlFor="name" className="title">Jueves</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workThursday" onChange={handleChange} />
          <label htmlFor="name" className="title">Viernes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workFriday" onChange={handleChange} />
          <label htmlFor="name" className="title">Sabado</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workSaturday" onChange={handleChange} />
          <label htmlFor="name" className="title">Domingo</label>
          <input type="number" className="ContainerAddUser__week--monday" name="dateRate.workSunday" onChange={handleChange} />
          <label htmlFor="name" className="title--payment">{'Total pago semanal:  $'}{payment}</label>
          {isOpen && (
          <div className="ContainerAddUser__modal">
            <div className="ContainerAddUser__modal-content">
              <p className="ContainerAddUser__modal--text"> Todos los campos son obligatorios</p>
              <button className="ContainerAddUser__modal--button" type="submit" onClick={handleModal}>Cerrar</button>
            </div>
          </div>
          )}
          <button type="submit" className="ContainerAddUser__week--button">Calcular pago semanal</button>

        </div>

      </form>
    </>

  );
};

export default AddUser;
