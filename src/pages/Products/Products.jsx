/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Product from '../../components/ProductCard/Product';
import './style.css';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import { productData } from '../../features/product/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState({
    brand: '',
    size: '',
    color: '',
  });
  const allProducts = useSelector((state) => state.products?.products);

  const handleFilterChange = (filter) => {
    setSelectedFilter({ ...selectedFilter, ...filter });
  };

  useEffect(() => {
    dispatch(productData());
  }, []);

  useEffect(() => {
    dispatch(productData(selectedFilter));
  }, [selectedFilter]);

  return (
    <div className="productsPage">
      <Header />
      <Filter onFilterChange={handleFilterChange} />
      {allProducts.map((product) => {
        return (<Product key={product._id} products={product} />);
      })}

    </div>
  );
};

export default Products;
