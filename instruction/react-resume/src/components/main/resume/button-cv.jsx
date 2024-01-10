import React from "react";
import { TfiDownload } from "react-icons/tfi";

const ButtonCV = () => {
	return (
		<button
			className="btn"
			style={{
				margin: "20px auto",
				display: "flex",
				gap: "5px",
				alignItems: "center",
			}}
		>
			Download CV <TfiDownload />
		</button>
	);
};

export default ButtonCV;
