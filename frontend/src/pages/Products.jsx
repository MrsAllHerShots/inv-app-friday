import React, {useState, useEffect } from 'react'

import Card from '../components/Card';

function Products() {

const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/api/products`);
    const data = await response.json();

    console.log('Data: ', data);
    const { products } = data;
    setProducts(products);
    console.log('Products: ', products);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className='products'>
    <h1>Inventory App</h1>
    <div className='container'>
      {products.length > 0
        ? products.map((item) => <Card key={item.id} item={item} includeDescription={false}/>)
        : 'No products to display'}
    </div>
  </div>
  )
}

export default Products
