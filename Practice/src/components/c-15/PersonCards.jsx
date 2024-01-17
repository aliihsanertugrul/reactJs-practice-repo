import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PersonCards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Subtitle>{props.id}</Card.Subtitle>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.job}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PersonCards