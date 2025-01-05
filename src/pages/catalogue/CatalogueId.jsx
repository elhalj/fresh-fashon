




import React from 'react'
import { useParams } from 'react-router-dom';

const CatalogueId = () => {

    let { id, image } = useParams();
  return (
    <div>
      <div>
        <h1>Product id: {id}</h1>
      </div>
    </div>
  )
}

export default CatalogueId
