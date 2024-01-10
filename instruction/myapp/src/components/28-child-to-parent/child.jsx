import React from "react";
import { Button } from "react-bootstrap";

const ChildComp = ({ counter, handleCounter }) => {
	return (
		<div>
			<Button onClick={() => handleCounter(5)}>Set Counter</Button>
		</div>
	);
};

export default ChildComp;
