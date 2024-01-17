import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkerCard from "./worker-card.jsx"
import HashLoader from "react-spinners/HashLoader";
const Worker = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    const getWorkerData = async () => {
      try {
        timer = setTimeout(async () => {
          const resp = await fetch(
            "https://650d9fdda8b42265ec2c80a4.mockapi.io/fetch-data"
          );
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await resp.json();
          setData(data);
          // console.log(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkerData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container className="mt-5 text-center mb-5">
      {loading && <HashLoader color="red" />}

      <Row className="g-5">
        {data.map((worker) => (
          <Col key={worker.id} sm={6} md={4} lg={3} xl={3}>
            <WorkerCard {...worker} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Worker;
