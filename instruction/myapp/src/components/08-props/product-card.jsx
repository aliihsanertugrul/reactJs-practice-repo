import React from 'react'
import "./style.scss";

const ProductCard = ({id, children}) => {

  //  const product = getProduct(id);

  return (
    <div className="product-card">
        {children}
    </div>
  )
}

export default ProductCard