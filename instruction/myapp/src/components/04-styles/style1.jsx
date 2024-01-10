import React from "react";

const Style1 = () => {
	const isRadius = false;

	return (
		<>
			<h1
				style={{
					border: "1px solid red",
					padding: "10px",
					borderRadius: isRadius ? "15px" : "0",
					textAlign: "center",
				}}
			>
				Inline Styles
			</h1>
			<p
				style={{
					fontStyle: "italic",
					fontSize: "1.4rem",
					textAlign: "justify",
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
				accusamus, commodi quia error officiis eaque culpa vero, facilis
				nostrum accusantium magnam labore odio, sed qui nobis non
				expedita sapiente saepe?
			</p>
		</>
	);
};

export default Style1;
