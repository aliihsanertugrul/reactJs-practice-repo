import React from "react";
import data from "../../../data/stats.json";
import "./stats.css";

const Stats = () => {
	return (
		<div className="stats">
			<ul>
				{data.map((item) => (
					<li key={item.title}>
						<h3>{item.value}</h3>
						<p>{item.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stats;
