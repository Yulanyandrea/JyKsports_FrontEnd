/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import useForm from '../../hooks/useForm';
import { deleteProduct, updateProduct } from '../../services/product';
import { productData } from '../../features/product/productSlice';

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.products.users?.profile?.role);
  // show buttons update
  const [show, setShow] = useState(false);
  // show modal not allow
  const [isOpen, setIsOpen] = useState(false);
  // show modal to update
  const [update, setUpdate] = useState(false);
  // take the value for the inputs
  const { form, handleChange } = useForm({});

  const handleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleUpdateModal = (e) => {
    e.preventDefault();
    setUpdate(!update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRole === 'USER') {
      setShow(false);
      setIsOpen(!isOpen);
    } else if (userRole === 'ADMIN') {
      setShow(true);
      setUpdate(!update);
    }
  };

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    if (userRole === 'USER') {
      setIsOpen(!isOpen);
    } else {
      try {
        const response = await deleteProduct(products._id);
        console.log(response);
        dispatch(productData());
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const reponseUp = await updateProduct(products._id, form);
      dispatch(productData(reponseUp));
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="productContainer">
      <section className="productContainer__image">
        <img src={products.image} alt="" className="productContainer__image--img" id="shoes" />

      </section>
      <section className="productContainer__description">
        <div className="containerId">
          <p className="productContainer__id--text"> <strong className="text">Color</strong></p>
          <p className="productContainer__id">{products.color}</p>
        </div>

        <div className="containerReference">
          <p className="productContainer__reference--text"> <strong className="text">Referencia</strong></p>
          <p className="productContainer__reference">{products.reference}</p>
        </div>

        <div className="containerBrand">
          <p className="productContainer__brand--text"><strong className="text">Marca</strong></p>
          <p className="productContainer__brand">{products.brand}</p>
        </div>

        <div className="containerSize">
          <p className="productContainer__size--text"><strong className="text">Talla</strong></p>
          <p className="productContainer__size">{products.size}</p>
        </div>

        <div className="containerAmount">
          <p className="productContainer__amount--text"><strong className="text">Cantidad en bodega</strong></p>
          <p className="productContainer__amount">{products.amount}</p>
        </div>

      </section>

      <section className="containerButtons">
        <div className="containerButtons__button--info">
          <button type="submit" className="containerButtons__buttonUpdate" onClick={handleSubmit}>Actualizar</button>
          {update && (
          <div className="modal">
            <div className="modal-content">
              <p className="modal__text">Puedes actualizar uno o todos los campos del producto</p>
              <img src="/images/shoes.gif" alt="" width="80" className="modal__image--shoes" />
              <button className="modal__button" type="submit" onClick={handleUpdateModal}>Cerrar</button>
            </div>
          </div>
          )}
          { show && (
          <><input type="text" className="containerButtons__updateRef" name="reference" onChange={handleChange} placeholder="Refencia" />
            <input type="text" className="containerButtons__updateBrand" name="brand" onChange={handleChange} placeholder="Marca" />
            <input type="number" className="containerButtons__updateSize" name="size" onChange={handleChange} placeholder="Talla" />
            <input type="number" className="containerButtons__updateBrand" name="amount" onChange={handleChange} placeholder="Cantidad en bodega" />
            <input type="text" className="containerButtons__updateBrand" name="color" onChange={handleChange} placeholder="Color" />
            <button type="submit" className="containerButtons__buttonAccept" onClick={handleUpdateProduct}>Aceptar</button>

          </>

          )}
          {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <p className="modal__text">No estas autorizado para modificar o borrar articulos</p>
              <img src="/images/not.webp" alt="" className="modal__image" />
              <button className="modal__button" type="submit" onClick={handleModal}>Cerrar</button>
            </div>
          </div>
          )}
        </div>
        <button type="submit" className="containerButtons__buttonDelete" onClick={handleSubmitDelete}>Borrar</button>
      </section>

    </div>
  );
};

export default Product;
