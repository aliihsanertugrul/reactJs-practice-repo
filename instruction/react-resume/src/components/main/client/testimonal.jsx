import React from "react";

const Testimonal = ({image, name, location, message, rate}) => {
	return (
		<div className="testimonal">
			<div className="title">
				<img src={`img/${image}`} alt="" />
				<div>
					<h4>{name}</h4>
					<p>User from {location}</p>
				</div>
			</div>
			<p>{message}</p>

			<label>{ [...new Array(rate)].map( (_,index) => <em key={index}>⭐</em> ) }</label>
		</div>
	);
};

export default Testimonal;
