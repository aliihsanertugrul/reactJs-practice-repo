import React from "react";
import "./style.css"

const SectionHeader = ({ title, subTitle }) => {
	return (
		<div className="section-title">
			<h2>{title}</h2>
			<h4>{subTitle}</h4>
		</div>
	);
};

export default SectionHeader;
