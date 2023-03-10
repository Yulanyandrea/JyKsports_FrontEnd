import { useState } from 'react';
import Header from '../../components/Header/Header';
import './style.css';

const AddUser = () => {
  const [date, setDate] = useState();

  const handleDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const handlePayment = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <form className="ContainerAddUser">
        <div className="ContainerAddUser__inputs">
          <label htmlFor="name" className="title">Nombre</label>
          <input type="text" className="ContainerAddUser__textName" name="name" placeholder="Ingrese nombre" />

          <label htmlFor="lastName" className="title">Apellido</label>
          <input type="text" className="ContainerAddUser__textName" name="lastName" placeholder="Ingrese apellido" />

          <label htmlFor="charge" className="title">Cargo</label>
          <input type="text" className="ContainerAddUser__textName" name="charge" placeholder="Ingrese cargo" />

          <label htmlFor="name" className="title">Ingrese fecha de incio </label>
          <input type="date" className="ContainerAddUser__textName" value={date} name="startDate" onChange={handleDate} />

          <label htmlFor="name" className="title">Ingrese fecha final</label>
          <input type="date" className="ContainerAddUser__textName" value={date} name="endDate" onChange={handleDate} />
        </div>

        <div className="ContainerAddUser__week">
          <label htmlFor="name" className="title">Lunes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workMonday" />
          <label htmlFor="name" className="title">Martes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workTuesday" />
          <label htmlFor="name" className="title">Miercoles</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workWednesday" />
          <label htmlFor="name" className="title">Jueves</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workThursday" />
          <label htmlFor="name" className="title">Viernes</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workFriday" />
          <label htmlFor="name" className="title">Sabado</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workSaturday" />
          <label htmlFor="name" className="title">Domingo</label>
          <input type="number" className="ContainerAddUser__week--monday" name="workSunday" />
          <label htmlFor="name" className="title">pago</label>
          <button type="submit" className="ContainerAddUser__week--button" onClick={handlePayment}>Calcular pago semanal</button>

        </div>

      </form>
    </>

  );
};

export default AddUser;
