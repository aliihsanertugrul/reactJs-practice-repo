import React from "react";
import { Button, Container } from "react-bootstrap";
import Counter from "../components/counter";
import { Link } from "react-router-dom";
import Hello from "../components/hello";
import UserToolbar from "../components/user-toolbar";

const HomePage = () => {
	return (
		<Container className="mt-3">
			<Hello/>

			<div className="mb-4">
				<UserToolbar/>
			</div>

			<Counter />
		</Container>
	);
};

export default HomePage;
