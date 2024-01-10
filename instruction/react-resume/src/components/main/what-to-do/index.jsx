import React from "react";
import SectionHeader from "../../common/section-header";
import "./style.css";
import Experience from "./experience";
import { AiOutlineDashboard } from "react-icons/ai";

const WhatToDo = () => {
	return (
		<section id="what-to-do" className="container what-to-do">
			<SectionHeader title="My Experience" subTitle="What I Do" />

			<div className="section-content">
				<div className="row">
					<div className="left">
						<ul>
							<li>
								<Experience
									title="Graphic Design"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
							<li>
								<Experience
									title="UI/UX Design"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
							<li>
								<Experience
									title="Business Analysis"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
						</ul>
					</div>
					<div className="right">
						<ul>
							<li>
								<Experience
									title="Web Design"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
							<li>
								<Experience
									title="App Design & Develop"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
							<li>
								<Experience
									title="SEO Marketing"
									icon={<AiOutlineDashboard />}
									desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, tempore."
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatToDo;
