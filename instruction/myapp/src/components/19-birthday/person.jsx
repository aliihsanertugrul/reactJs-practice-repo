import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { LiaBirthdayCakeSolid, LiaTrashAlt } from "react-icons/lia";

const Person = ({ id, image, name, age, deletePerson }) => {


	
	return (
		<Card className="mb-3">
			<Card.Body>
				<Row className="align-items-center">
					<Col xs="3">
						<Image
							src={`img/${image}`}
							roundedCircle={true}
							className="img-fluid"
						/>
					</Col>
					<Col xs="9">
						<Card.Title>{name}</Card.Title>
						<Card.Subtitle>
							<LiaBirthdayCakeSolid /> {age}
						</Card.Subtitle>
					</Col>
				</Row>
			</Card.Body>
			<span
				className="position-absolute end-0 me-3 mt-2 fs-2 text-danger"
				style={{ cursor: "pointer" }}
				onClick={() => deletePerson(id)}
			>
				<LiaTrashAlt />
			</span>
		</Card>
	);
};

export default Person;
