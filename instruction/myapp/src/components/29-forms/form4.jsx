import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form4 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// form handling burada yapılır

		// formData API a gönderilir. (fetch / axios)
	};

	return (
		<Container className="mt-5">
			{/* HTML5 validation devre dışı bırakmak için noValidate */}
			<Form noValidate onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						placeholder=""
						value={formData.firstName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="email"
						placeholder=""
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						name="phone"
						type="text"
						placeholder=""
						value={formData.phone}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button type="submit" variant="warning">
					Send
				</Button>
			</Form>
		</Container>
	);
};

export default Form4;
