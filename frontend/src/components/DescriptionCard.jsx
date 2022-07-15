import React from 'react';

import LinkButton from './LinkButton';

function DescriptionCard ({item, includeDescription}) {
  return (
    <div className='description-card'>
      <div className="description-card-title">
        <h3>{item.title}</h3>
      </div>
      <div className="description-card-image">
        <img src={item.image} alt={item.title}/>
      </div>
      <div className="description-card-content">
        {includeDescription && item.description}
      </div>
      <div className="description-card-actions">
        <LinkButton to={`/`} text={'Back'}/>
      </div>
    </div>
  )
}

export default DescriptionCard;
