import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form3 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});

	console.log(formData);

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
						type="text"
						placeholder=""
						value={formData.firstName}
						onChange={(e) =>
							setFormData({
								...formData,
								firstName: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={(e) =>
							setFormData({
								...formData,
								lastName: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder=""
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.phone}
						onChange={(e) =>
							setFormData({
								...formData,
								phone: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Button type="submit" variant="warning">
					Send
				</Button>
			</Form>
		</Container>
	);
};

export default Form3;
