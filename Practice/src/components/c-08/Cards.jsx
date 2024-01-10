import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Cards = ({isim,yas,kurs,img}) => {
  return (
    <Card  className='kartlar'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} style={{height:"350px"}} />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <Card.Title>{kurs}</Card.Title>
        <Card.Text>
          {yas}
        </Card.Text>
        <Button variant="danger">Gonder</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards