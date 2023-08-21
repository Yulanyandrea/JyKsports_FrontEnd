/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productDataBase } from '../../features/product/productSlice';
import { filterArrayProduct } from '../../services/product';
import './style.css';

const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDataBase());
  }, []);
  const products = useSelector((state) => state.products?.productsDataBase);

  // brands
  const brands = filterArrayProduct(products, 'brand');
  console.log(brands, 'this is brands');
  // size
  const sizes = filterArrayProduct(products, 'size');
  // color
  const colors = filterArrayProduct(products, 'color');

  const handelChange = ({ target }) => {
    const { value, name } = target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="menuFilter">
      <section className="menuFilter__brand">
        <label htmlFor="brand-names" className="menuFilter__brand--text">Marca</label>
        <select
          label="name"
          name="brand"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {brands.map((brand) => {
            return (<option key={brand} name="brand" value={brand}>{brand}</option>);
          })}
        </select>
      </section>
      <section className="menuFilter__size">
        <label htmlFor="size" className="menuFilter__size--text">Talla</label>
        <select
          label="size"
          name="size"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {sizes.map((size) => {
            return (<option name="size" key={size} value={size}>{size}</option>);
          })}

        </select>
      </section>
      <section className="menuFilter__color">
        <label htmlFor="color" className="menuFilter__color--text">Color</label>
        <select
          label="color"
          name="color"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {colors.map((color) => {
            return (<option name="color" key={color} value={color}>{color}</option>);
          })}
        </select>
      </section>
    </div>
  );
};

export default Filter;
