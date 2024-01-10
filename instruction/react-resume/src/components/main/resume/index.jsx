import React from "react";
import SectionHeader from "../../common/section-header";
import ResumeCard from "./resume-card";
import Skill from "./skill";
import ButtonCV from "./button-cv";
import "./style.css";

const Resume = () => {
	return (
		<section id="resume" className="container resume">
			<SectionHeader title="Summary" subTitle="Resume" />

			<div className="section-content">
				<div className="row">
					<div className="left">
						<h3>My Education</h3>
						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>

						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>

						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>
					</div>
					<div className="right">
						<h3>My Experience</h3>

						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>
						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>
						<ResumeCard
							date="2000-2004"
							title="Computer Science"
							subTitle="nternational University"
							desc="Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum inventore harum
								possimus, officiis totam et magnam odit
								dignissimos."
						/>
					</div>
				</div>

				<h3>My Skills</h3>
				<div className="row">
					<div className="left">
						<Skill title="Web Design" rate="65" />
						<Skill title="Web Design" rate="35" />
						<Skill title="Web Design" rate="65" />
					</div>
					<div className="right">
						<Skill title="Web Design" rate="65" />
						<Skill title="Web Design" rate="65" />
						<Skill title="Web Design" rate="65" />
					</div>
				</div>

				<ButtonCV/>
			</div>
		</section>
	);
};

export default Resume;
