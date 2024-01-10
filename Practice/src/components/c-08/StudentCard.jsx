import React from 'react'
import data from "../../assets/data/students.json"
import { Container,Row,Col } from 'react-bootstrap'
import "./cards.scss"
import Cards from './Cards'



const StudentCard = () => {
  return (
    <Container className='text-center'>
        <Row className='m-3'>
          {

data.map((student,index)=><Col key={index} md={6} lg={3} xl={3}  > <Cards {...student}  />  </Col>)

          }

         

        </Row>

    </Container>
  )
}

export default StudentCard