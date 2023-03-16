/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Employee from '../Employee/Employee';

const UsersAuth = ({ children, roles }) => {
  const userRole = useSelector((state) => state.products.users?.profile?.role);
  return (
    <section>
      {userRole === roles ? <Employee /> : children }
    </section>
  );
};

export default UsersAuth;
