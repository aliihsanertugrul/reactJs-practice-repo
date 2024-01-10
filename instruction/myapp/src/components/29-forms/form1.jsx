import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
	const [name, setName] = useState("Veli");

	return (
		<Container className="mt-5">
			<h3>{name}</h3>
			<Form>
				<Form.Control
					placeholder="Type your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</Form>
		</Container>
	);
};

export default Form1;
