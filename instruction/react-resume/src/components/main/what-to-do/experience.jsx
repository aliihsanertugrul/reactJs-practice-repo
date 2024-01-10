import React from "react";

const Experience = ({ title, desc, icon }) => {
	return (
		<>
			{icon}
			<div>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</>
	);
};

export default Experience;
