/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import useForm from '../../hooks/useForm';
import { deleteProduct, updateProduct } from '../../services/product';
import { productData } from '../../features/product/productSlice';

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { form, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleSubmitDelete = async (e) => {
    try {
      const response = await deleteProduct(products._id);
      dispatch(productData());
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (e) => {
    try {
      const reponseUp = await updateProduct(products._id, form);
      dispatch(productData());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="productContainer">
      <section className="productContainer__image">
        <img src="/images/sneaker.jpg" alt="" className="productContainer__image--img" id="shoes" />

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
          {show && (
          <><input type="reference" className="containerButtons__updateRef" name="reference" onChange={handleChange} placeholder="Refencia" />
            <input type="brand" className="containerButtons__updateBrand" name="brand" onChange={handleChange} placeholder="Marca" />
            <input type="size" className="containerButtons__updateSize" name="size" onChange={handleChange} placeholder="Talla" />
            <input type="amount" className="containerButtons__updateBrand" name="amount" onChange={handleChange} placeholder="Cantidad en bodega" />
            <input type="amount" className="containerButtons__updateBrand" name="color" onChange={handleChange} placeholder="Color" />
            <button type="submit" className="containerButtons__buttonAccept" onClick={handleUpdateProduct}>Aceptar</button>

          </>

          )}
        </div>
        <button type="submit" className="containerButtons__buttonDelete" onClick={handleSubmitDelete}>Borrar</button>
      </section>

    </div>
  );
};

export default Product;
