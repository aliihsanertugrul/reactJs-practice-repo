import React from "react";
import "./style.css";

const Banner = () => {
	return (
		<section className="banner">
			<img src="img/john-doe-banner.jpg" alt="John Doe banner" />

			<div className="banner-text">
				<h5>Welcome</h5>
				<h2>I'm a developer</h2>
				<p>based in Los Angeles, Califormia</p>
				<button className="btn btn-outline-green">Hire Me</button>
			</div>
		</section>
	);
};

export default Banner;
