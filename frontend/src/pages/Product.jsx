import React, {useState, useEffect}  from 'react'; 
import { useParams } from 'react-router-dom';

import DescriptionCard from '../components/DescriptionCard'

function Product() {

    const {id} = useParams();

    const [ product, setProduct ] = useState({});

    const getProduct = async (productId) => {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);

        const data = await response.json();

        console.log(data.product);

        setProduct(data.product);
    }

    useEffect(() => {
        getProduct(id);
    },[id]);



  return (
    <div className='product'>
      <h1>Product Details:</h1>
      <div>
        {product ? <DescriptionCard item={product} includeDescription={true}/> : 'Loading...'}
      </div>
    </div>
  )
}

export default Product
