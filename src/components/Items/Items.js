import React from 'react';

function Items({price,description,title}) {
  return (
    <div>
        <p>{price}</p>
        <h1>{title}</h1>
        <h1>{description}</h1>
    </div>
  )
}

export default Items;