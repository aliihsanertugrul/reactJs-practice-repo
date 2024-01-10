import React from "react";
import SectionHeader from "../../common/section-header";
import Stats from "./stats";
import Personal from "./personal";
import WhoAmI from "./who-am-i";

const About = () => {
	return (
		<section id="about" className="container about">
			

            <SectionHeader title="About Me" subTitle="Know Me More"/>

			<div className="section-content">
				<div className="row">
					<div className="left">
						<WhoAmI/>
					</div>

					<div className="right">
						<Personal/>
					</div>
				</div>

				<Stats/>
			</div>
		</section>
	);
};

export default About;
