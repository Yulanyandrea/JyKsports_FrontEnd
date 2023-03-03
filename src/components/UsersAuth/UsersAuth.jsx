/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Users from '../Users/Users';

const UsersAuth = ({ children, roles }) => {
  const userRole = useSelector((state) => state.products.users?.profile?.role);
  return (
    <section>
      {userRole === roles ? <Users /> : children }
    </section>
  );
};

export default UsersAuth;
