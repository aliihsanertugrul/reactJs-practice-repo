import React from 'react'
import { Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <Nav className='d-flex justify-content-center align-items-center bg-dark text-light '>
    <Nav.Item as="li">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="login">Login</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="register">Register</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default Menu