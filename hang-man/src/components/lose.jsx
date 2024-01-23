import React from 'react'
import image from "../img/olen_adam.jpg"
import { Button, Card } from 'react-bootstrap'
import { FaRecycle } from "react-icons/fa";

const Lose = ({setError,error,stateFiller}) => {
    const resetGame=()=>{
        setError(0)
        stateFiller()
    }
  return (
    <Card className="d-flex align-items-center border-0" style={{width:"275px", height: "auto"}}>
    <Card.Img variant="top" src={image} style={{width:"250px", height: "auto"}} />
    <Card.Body>
      <Card.Title className='fs-3 text-danger'>KAYBETTİNİZ... </Card.Title>
    </Card.Body>
    <Button className='bg-danger border-0 w-25' onClick={()=> resetGame()}><FaRecycle/></Button>
  </Card>
  )
}

export default Lose