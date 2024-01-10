import React from "react";

const Welcome = ({ firstName, lastName }) => {
	// const {firstName, lastName} = props;

	return (
		<div>
			<h2>
				Welcome {firstName} {lastName}
			</h2>
		</div>
	);
};

export default Welcome;
