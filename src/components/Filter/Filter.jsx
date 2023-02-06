/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterProducts } from '../../features/product/productApi';
import './style.css';

const Filter = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    brand: '',
    size: '',
    color: '',
  });
  // console.log(selectedProduct);
  const allProducts = useSelector((state) => state.products?.products);
  useEffect(() => {
    const filterProduct = async () => {
      const productApi = await filterProducts(selectedProduct);
      console.log('product api', productApi);
    };
    filterProduct();
  }, [selectedProduct]);
  return (
    <div className="menuFilter">
      <section className="menuFilter__brand">
        <label htmlFor="brand-names" className="menuFilter__brand--text">Marca</label>
        <select
          label="name"
          name="brand"
          onChange={
            (event) => setSelectedProduct({ ...selectedProduct, brand: event.target.value })
}
        >
          <option name="null"> </option>
          {allProducts.map((brand) => {
            return (<option name="brand" value={brand.brand}>{brand.brand}</option>);
          })}
        </select>
      </section>
      <section className="menuFilter__size">
        <label htmlFor="size" className="menuFilter__size--text">Talla</label>
        <select
          label="size"
          name="size"
          onChange={
            (event) => setSelectedProduct({ ...selectedProduct, size: event.target.value })
}
        >
          <option name="null"> </option>
          {allProducts.map((size) => {
            return (<option name="size" value={size.size}>{size.size}</option>);
          })}

        </select>
      </section>
      <section className="menuFilter__color">
        <label htmlFor="color" className="menuFilter__color--text">Color</label>
        <select
          label="color"
          name="color"
          onChange={
            (event) => setSelectedProduct({ ...selectedProduct, color: event.target.value })
}
        >
          <option name="null"> </option>
          {allProducts.map((color) => {
            return (<option name="color" value={color.color}>{color.color}</option>);
          })}
        </select>
      </section>
    </div>
  );
};

export default Filter;
