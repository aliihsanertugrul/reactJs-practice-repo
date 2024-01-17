import React from 'react'
import { Button, Card } from 'react-bootstrap'

const WorkerCard = (props) => {
    const{id,name,job,avatar}=props
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Subtitle>{id}</Card.Subtitle>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {job}
        </Card.Text>
        <Button variant="primary">Click me</Button>
      </Card.Body>
    </Card>
  )
}

export default WorkerCard