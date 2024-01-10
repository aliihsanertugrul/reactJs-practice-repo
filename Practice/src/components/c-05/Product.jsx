import React from 'react'
import fruits from "./Fruits.jsx"

const Product = () => {

  const listFruits=  fruits.map((fruit)=>(<li key={fruit.id} style={{color:fruit.isFruit ? "red":"green"}}>{fruit.title}</li>))

  return (
    <ol>{listFruits}</ol>
  )
}

export default Product