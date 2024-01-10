import React from 'react'
import Header from './header'
import ProductList from './product-list'
import Footer from './footer'

const Shop = () => {
  return (
    <div className="d-flex flex-column h-100">
        <Header/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Shop