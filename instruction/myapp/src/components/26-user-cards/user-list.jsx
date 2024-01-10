import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";
const API_BASE_URL = "https://65775f19197926adf62e1c85.mockapi.io/api/v1";

const wait = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadData = async () => {
    await wait(3);
		fetch(`${API_BASE_URL}/users`)
			.then((resp) => resp.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			});
	};

	useEffect(() => {
    loadData();
  }, []);

	return (
		<Container className="mt-3">
			<h1>User List</h1>

			{loading ? (
				<Spinner animation="border" />
			) : (
				<Row xs={1} sm={2} md={3} lg={4} className="g-4">
					{users.map((item) => (
						<Col key={item.id}>
							<UserCard {...item} />
						</Col>
					))}
				</Row>
			)}
		</Container>
	);
};

export default UserList;
