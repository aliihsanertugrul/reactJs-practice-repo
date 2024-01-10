import React from 'react'
import { Card } from 'react-bootstrap'
import { LiaEnvelopeOpen } from 'react-icons/lia'

const UserCard = ({avatar, firstName, lastName, email}) => {
  return (
    <Card className="h-100">
        <Card.Img variant="top" src={avatar}/>
        <Card.Body>
            <Card.Title>{firstName} {lastName}</Card.Title>
            <Card.Subtitle><LiaEnvelopeOpen/> {email}</Card.Subtitle>
        </Card.Body>
    </Card>
  )
}

export default UserCard