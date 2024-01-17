import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container,Row,Col } from "react-bootstrap";
import { PacmanLoader } from "react-spinners";
import PersonCards from "./PersonCards";

const Person = () => {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
const getPerson = async() => { 

    try {
          const resp= await axios.get("https://650d9fdda8b42265ec2c80a4.mockapi.io/fetch-data");
   const data=resp.data;
   setPerson(data);
   setLoading(false);
  // console.log(data)

    } catch (error) {
        console.log(error)
        
    }

 }
 getPerson()

  }, []);

  return <Container className="text-center mt-5 mb-5">

{loading && <PacmanLoader color="#yellow" />}

<Row className="g-4">
    {

person.map((pers)=>(<Col key={pers.id} md={6} lg={3}>

    <PersonCards {...pers}  />
</Col>))

    }
</Row  >

  </Container>;
};

export default Person;