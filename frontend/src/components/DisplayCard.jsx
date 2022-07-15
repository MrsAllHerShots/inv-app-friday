import React from 'react';
import { Link } from 'react-router-dom';

function Card({item}) {
  return (
    <div className='card'>
      <h3>Product:</h3>
      <h4>{item.title}</h4>
      <img src={item.image} alt={item.title}/>
      <p>{item.description}</p>
      <Link to={`/product/${item.id}`}>View Details</Link>
    </div>
  )
}

export default Card;

