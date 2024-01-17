import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WorkerCardTry from "./worker-card-try";

const WorkerTry = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data);

 useEffect(() => {
    let timer;
    const getWorkerTryData=()=>{
        try {
            timer=setTimeout(async() => {
                const resp=await fetch("https://650d9fdda8b42265ec2c80a4.mockapi.io/fetch-data")
                const workerData=await resp.json()
                setData(workerData);
                // console.log(workerData)
                setLoading(false);
            }, 3000);


        } catch (error) {
            console.log(error)
        }
    };

   getWorkerTryData()
 
   return () => {
     clearTimeout(timer)
   }
 }, [])
 

  return (
    <Container>
      <Row>
        {
            data.map((worker)=>(<Col key={worker.id} > <WorkerCardTry {...worker}/> </Col>))
        
        }
        </Row>
    </Container>
  );
};

export default WorkerTry;
