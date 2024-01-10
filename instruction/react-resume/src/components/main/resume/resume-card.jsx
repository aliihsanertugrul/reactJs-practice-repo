import React from "react";
import "./resume-card.css";

const ResumeCard = ({date, title, subTitle, desc}) => {
	return (
		<div className="resume-card">
			<span>{date}</span>
			<h4>{title}</h4>
			<h6 className="text-green">{subTitle}</h6>
			<p>{desc}</p>
		</div>
	);
};

export default ResumeCard;
