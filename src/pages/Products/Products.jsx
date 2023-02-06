/* eslint-disable no-unused-vars */
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Product from '../../components/ProductCard/Product';
import './style.css';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import { productData } from '../../features/product/productSlice';

const Products = () => {
  const allProducts = useSelector((state) => state.products?.products);
  const filter = useSelector((state) => state.products.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData());
  }, []);

  return (
    <div className="productsPage">
      <Header />
      <Filter />

      {
        allProducts.map((product) => {
          return (<Product key={product._id} products={product} />);
        })
      }

    </div>
  );
};

export default Products;
