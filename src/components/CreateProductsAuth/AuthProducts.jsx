/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Products from '../../pages/Products/Products';

const AuthProducts = ({ children, roles }) => {
  const userRole = useSelector((state) => state.products.users?.profile?.role);
  return (
    <section>
      {userRole === roles ? <Products /> : children }
    </section>
  );
};

export default AuthProducts;
