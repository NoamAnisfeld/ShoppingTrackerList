import React from 'react';

function Items({price,description,title,category}) {
  return (
    <div>
        <p>{price}</p>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{category}</h1>
        <h1>Test</h1>
    </div>
  )
}

export default Items;