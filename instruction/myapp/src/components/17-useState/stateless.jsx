import React from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
	let classes = "bg-dark text-light";

	const setClasses = (mode) => {
		if (mode === "dark") {
			classes = "bg-dark text-light";
		} else {
			classes = "bg-light text-dark";
		}

		console.log("IN FUNCTION", classes);
	};

	console.log("OUT FUNCTION", classes);

	return (
		<div className={classes}>
			<h1 className="text-center">Dark/Light Switcher</h1>

			<div className="d-flex justify-content-center gap-3 mt-5">
				<Button onClick={() => setClasses("dark")}>Dark Mode</Button>
				<Button onClick={() => setClasses("light")}>Light Mode</Button>
			</div>
		</div>
	);
};

export default Stateless;
