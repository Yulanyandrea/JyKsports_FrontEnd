import { useState, useEffect } from 'react';
import Product from '../../components/ProductCard/Product';
import getAllProducts from '../../services/product';
import './style.css';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="productsPage">
      <Header />
      <Filter />

      {
        product.map((products) => {
          return (<Product products={products} />);
        })
      }

    </div>
  );
};

export default Products;
