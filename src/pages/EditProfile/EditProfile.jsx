/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateDataUser } from '../../features/product/productSlice';
import useForm from '../../hooks/useForm';
import Header from '../../components/Header/Header';
import './style.css';

const EditProfile = () => {
  const url = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleChange } = useForm({});
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const currentDataUser = useSelector((state) => state.products.currentUser);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (image === null) {
      dispatch(updateDataUser(form));
      navigate('/home');
    } else {
      const formData = new FormData();
      formData.append('file', image);

      // connect to back end
      const options = {
        method: 'POST',
        body: formData,
      };
      const response = await fetch(`${url}/upload/file`, options);
      const data = await response.json();
      setImg(data.url);
      try {
        const res = await dispatch(updateDataUser(({ ...form, profilePicture: data.url })));
      } catch (error) {
        console.error(error);
      }
      navigate('/home');
    }
  };

  return (
    <section className="editProfile">
      <Header />
      <form action="" className="editProfile__form" onSubmit={handleSubmit}>
        <section className="editProfile__image">
          {!img ? <img src={currentDataUser?.profilePicture} alt="" className="editProfile__image--img" /> : <img src={img} alt="" className="editProfile__image--img" /> }
          <input type="file" className="editProfile__image--select" name="profilePicture" onChange={handleChangeImage} />

        </section>
        <section className="editProfile__info">
          <label htmlFor="name" className="editProfile__userData">{'Nombre: '}{currentDataUser.firstName}</label>
          <input type="text" className="editProfile__text" name="firstName" placeholder="Nombre" onChange={handleChange} />

          <label htmlFor="name" className="editProfile__userData">{'Apellido: '}{currentDataUser.lastName}</label>
          <input type="text" className="editProfile__text" name="lastName" placeholder="Apellido" onChange={handleChange} />

          <label htmlFor="name" className="editProfile__userData">{'Nombre de usuario: '}{currentDataUser.userName}</label>
          <input type="text" className="editProfile__text" name="userName" placeholder="Nombre de usuario" onChange={handleChange} />

          <label htmlFor="name" className="editProfile__userData">{'Email: '}{currentDataUser.email}</label>
          <input type="text" className="editProfile__text" name="email" placeholder="Email" onChange={handleChange} />
        </section>
        <button type="submit" className="editProfile__button">Actualizar </button>
      </form>
    </section>
  );
};
export default EditProfile;
