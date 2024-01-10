import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const API_URL = "https://65775f19197926adf62e1c85.mockapi.io/api/v1";

const Form6 = () => {
	const [loading, setLoading] = useState(false);

	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string()
			.min(2, "Invalid firstname")
			.max(15, "Invalid firstname")
			.required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		email: Yup.string().email().required("Required"),
		phone: Yup.string().required("Required"),
	});

	const onSubmit = async (values) => {
		// Bu aşamada values API a gönderilir (fetch/axios)
		setLoading(true);
		try {
			const resp = await fetch(`${API_URL}/users`, {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!resp.ok) throw new Error("Something went wrong");

			alert("User was created");
			formik.resetForm();
		} catch (err) {
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<Container className="mt-5">
			{/* HTML5 validation devre dışı bırakmak için noValidate */}
			<Form noValidate onSubmit={formik.handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("firstName")}
						isInvalid={
							formik.touched.firstName && formik.errors.firstName
						}
						/* 						
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
 						*/
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.firstName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("lastName")}
						isInvalid={
							formik.touched.lastName && formik.errors.lastName
						}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.lastName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder=""
						{...formik.getFieldProps("email")}
						isInvalid={formik.touched.email && formik.errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.email}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("phone")}
						isInvalid={formik.touched.phone && formik.errors.phone}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.phone}
					</Form.Control.Feedback>
				</Form.Group>

				<Button
					type="submit"
					variant="warning"
					disabled={loading || !formik.dirty || !formik.isValid}
				>
					{loading && <Spinner size="sm" />} Send
				</Button>
			</Form>
		</Container>
	);
};

export default Form6;
