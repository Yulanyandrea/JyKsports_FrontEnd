/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import AddUser from '../../pages/AddUser/AddUser';

const EmployeeAuth = ({ children, roles }) => {
  const userRole = useSelector((state) => state.products.users?.profile?.role);
  return (
    <section>
      {userRole === roles ? <AddUser /> : children }
    </section>
  );
};

export default EmployeeAuth;
