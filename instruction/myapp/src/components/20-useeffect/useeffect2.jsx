import React, { useEffect } from "react";
import { FormControl } from "react-bootstrap";

const UseEffect2 = () => {
	useEffect(() => {
		console.log("USEEEFECT 2 - MOUNTING");

		return () => {
			console.log("USEEEFECT 2 - UNMOUNTING");
		};
	}, []);

	return (
		<div>
			<div className="my-2">
				<FormControl placeholder="type your name" />
			</div>
		</div>
	);
};

export default UseEffect2;
