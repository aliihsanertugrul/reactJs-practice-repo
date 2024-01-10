import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Useref = () => {
	const nameRef = useRef(null);

	const handleClick = () => {
        const txtName = nameRef.current;
        console.log(txtName)
        txtName.defaultValue = "Hello"
        txtName.classList.add("bg-danger");
        txtName.style.color = "white";
    };

	return (
		<Container className="text-center mt-4">
			<Form.Control ref={nameRef} placeholder="Enter your name" />
			<Button className="mt-4" onClick={handleClick}>
				Ok
			</Button>
		</Container>
	);
};

export default Useref;
