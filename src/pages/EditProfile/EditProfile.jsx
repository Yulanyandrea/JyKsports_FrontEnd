/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../services/user';
import { updateDataUser, currentUser } from '../../features/product/productSlice';
import useForm from '../../hooks/useForm';

import Header from '../../components/Header/Header';
import './style.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleChange } = useForm({});
  const user = useSelector((state) => state.products?.users?.profile);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    dispatch(updateDataUser(form));
    navigate('/home');
  };

  return (
    <section className="editProfile">
      <Header />
      <form action="" className="editProfile__form" onSubmit={handleSubmit}>
        <section className="editProfile__image">
          <img src={user?.profilePicture} alt="" className="editProfile__image--img" />
        </section>
        <section className="editProfile__info">
          <input type="text" className="editProfile__text" name="userName" placeholder="nombre de usuario" onChange={handleChange} />
          <input type="text" className="editProfile__text" name="email" placeholder="email" onChange={handleChange} />
        </section>
        <button type="submit" className="editProfile__button">Actualizar </button>
      </form>
    </section>
  );
};
export default EditProfile;
