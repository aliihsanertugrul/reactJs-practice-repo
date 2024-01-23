import React from 'react'
import image from "../img/olen_adam.jpg"
import { Button, Card } from 'react-bootstrap'
import { FaRecycle } from "react-icons/fa";
import imageWin from "../../src/img/kazananlar.jpg"

const Win = ({setError,error,stateFiller,setWin}) => {
    const resetGame=()=>{
        setError(0)
        stateFiller()
        setWin(false)
    }
  return (
    <Card className="d-flex align-items-center border-0" style={{width:"275px", height: "auto"}}>
    <Card.Img variant="top" src={imageWin} style={{width:"250px", height: "auto"}} />
    <Card.Body>
      <Card.Title className='fs-3 text-success'>KAZANDINIZ... </Card.Title>
    </Card.Body>
    <Button className='bg-success border-0 w-25' onClick={()=> resetGame()}><FaRecycle/></Button>
  </Card>
  )
}

export default Win