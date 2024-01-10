import React, { useState } from 'react'
import data from "./data.jsx"
import { Button, Card } from 'react-bootstrap'
import "./sairler.scss"

const Sairler = () => {
    const [index, setIndex] = useState(0)

    const {id,isim,tarih,resim,metin}=data[index]

    const previous = (prev) => { 
        if(prev<0) prev=data.length-1
        setIndex(prev)

     }

     const next = (nxt) => { 
        if(nxt>data.length-1) nxt=0;
        setIndex(nxt)
      }

      const random = () => { 
        let rnd=Math.floor(Math.random()*data.length)
        setIndex(rnd)
       }




  return (
    <Card className='kartlar' style={{ width: '20rem', height:"33rem" }}>
    <Card.Img variant="top" src={resim} />
    <Card.Body>
      <Card.Title>{isim}</Card.Title>
      <Card.Subtitle>{tarih}</Card.Subtitle>
      <Card.Text>
       {metin}
      </Card.Text>
      <Card.Subtitle>{id}</Card.Subtitle>
      <div className='butonlar' style={{width:"100px!important"}}>
      <Button variant="danger"  onClick={()=>previous(index-1)}>Onceki</Button>
      <Button variant="warning" onClick={random}>Rastgele</Button>
      <Button variant="success"  onClick={()=>next(index+1)} >Sonraki</Button>
      </div> 
    </Card.Body>
  </Card>
  )
}

export default Sairler