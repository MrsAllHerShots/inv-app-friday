import React from 'react';

import LinkButton from './LinkButton';

function Card({item, includeDescription}) {
  return (
    <div className='card'>
      <div className="card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="card-image">
        <img src={item.image} alt={item.title}/>
      </div>
      <div className="card-content">
        {includeDescription && item.description}
      </div>
      <div className="card-actions">
        <LinkButton to={`product/${item.id}`} text={'Details'}/>
      </div>
    </div>
  )
}

export default Card;

