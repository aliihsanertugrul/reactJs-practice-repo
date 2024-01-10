import React from "react";
import "./personal.css";

const Personal = () => {
	return (
		<>
			<ul>
				<li>
					<strong>Name:</strong> John Doe
				</li>
				<li>
					<strong>Email:</strong>
					<span className="text-green">john@doe.com</span>
				</li>
				<li>
					<strong>Age:</strong> 35
				</li>
				<li>
					<strong>From:</strong> Los Angeles, California
				</li>
			</ul>
			<button className="btn btn-bg-green">Download CV</button>
		</>
	);
};

export default Personal;
