import React, { forwardRef, useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

const Register = () => {
	const [loading, setLoading] = useState(false);

	const initialValues = {
		ssn: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		adress: "",
		phoneNumber: "",
	};

	const validationSchema = Yup.object({
		ssn: Yup.string().required("Lutfen ssn giriniz"),
		firstName: Yup.string().required("Lutfen adinizi giriniz"),
		lastName: Yup.string().required("Lutfen soyadinizi giriniz"),
		email: Yup.string().required("Lutfen emailinizi giriniz"),
		password: Yup.string()
			.required("Lutfen parolanizi giriniz")
			.min(8, "Parolaniz en az 8 karakter olmalidir")
			.matches(/(?=.*[0-9])/, "Parolanız en az bir rakam icermelidir")
			.matches(
				/(?=.*[a-z])/,
				"Parolanız en az bir kucuk harf icermelidir"
			)
			.matches(
				/(?=.*[A-Z])/,
				"Parolanız en az bir buyuk harf icermelidir"
			)
			.matches(
				/(?=.*[!@#$%^&*])/,
				"Parolanız en az bir özel karakter icermelidir"
			),
		adress: Yup.string().required("Lutfen adresinizi giriniz"),
		phoneNumber: Yup.string().required("Lutfen telefon numaranizi giriniz"),
	});

	const onSubmit = (values) => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			alert("Basariyla sisteme kayit olundu");
      formik.resetForm()
		}, 2000);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<Card style={{ width: "30rem", margin: "0 auto", marginTop: "100px" }}>
			<Card.Body>
				<Form noValidate onSubmit={formik.handleSubmit}>
					<Form.Group className="mb-3" controlId="ssn">
						<Form.Label>SSn</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Ssn"
							{...formik.getFieldProps("ssn")}
              isInvalid={formik.touched.ssn&&formik.errors.ssn}
              isValid={formik.touched.ssn&&!formik.errors.ssn}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.ssn}
						</Form.Control.Feedback>
					</Form.Group>


          <Form.Group className="mb-3" controlId="firstName">
						<Form.Label>FirstName</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your name"
							{...formik.getFieldProps("firstName")}
              isInvalid={formik.touched.firstName&&formik.errors.firstName}
              isValid={formik.touched.firstName&&!formik.errors.firstName}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.firstName}
						</Form.Control.Feedback>
					</Form.Group>


          <Form.Group className="mb-3" controlId="lastName">
						<Form.Label>lastName</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your lastName"
							{...formik.getFieldProps("lastName")}
              isInvalid={formik.touched.lastName&&formik.errors.lastName}
              isValid={formik.touched.lastName&&!formik.errors.lastName}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.lastName}
						</Form.Control.Feedback>
					</Form.Group>

          
          <Form.Group className="mb-3" controlId="email">
						<Form.Label>email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter your email"
							{...formik.getFieldProps("email")}
              isInvalid={formik.touched.email&&formik.errors.email}
              isValid={formik.touched.email&&!formik.errors.email}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.email}
						</Form.Control.Feedback>
					</Form.Group>

          <Form.Group className="mb-3" controlId="password">
						<Form.Label>password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your password"
							{...formik.getFieldProps("password")}
              isInvalid={formik.touched.password&&formik.errors.password}
              isValid={formik.touched.password&&!formik.errors.password}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.password}
						</Form.Control.Feedback>
					</Form.Group>


          <Form.Group className="mb-3" controlId="adress">
						<Form.Label>adress</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your adress"
							{...formik.getFieldProps("adress")}
              isInvalid={formik.touched.adress&&formik.errors.adress}
              isValid={formik.touched.adress&&!formik.errors.adress}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.adress}
						</Form.Control.Feedback>
					</Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
						<Form.Label>phoneNumber</Form.Label>
						<Form.Control
							type="tel"
							placeholder="Enter your phoneNumber"
							{...formik.getFieldProps("phoneNumber")}
              isInvalid={formik.touched.phoneNumber&&formik.errors.phoneNumber}
              isValid={formik.touched.phoneNumber&&!formik.errors.phoneNumber}
						/>
						<Form.Control.Feedback type="invalid">
						
            {formik.errors.phoneNumber}
						</Form.Control.Feedback>
					</Form.Group>




					<Button variant="primary" type="submit" disabled={!formik.dirty || !formik.isValid || loading}>
			      {loading ? <Spinner animation="border" variant="danger"/>  : "Register"}			
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default Register;