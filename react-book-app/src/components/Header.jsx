import React from 'react'
import { Link } from 'react-router-dom'
import "./book.scss";

const Header = () => {
  return (
    <div className='headers'>
      <div>
        <h1>A&amp;E</h1>
      </div>
      <Link to="/favorites" className='links'> 
      <h3>Favorites</h3>
      </Link>

    </div>
  )
}

export default Header