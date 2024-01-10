import React from "react";
import SectionHeader from "../../common/section-header";
import data from "../../../data/portfolio.json";
import "./style.css";

const Portfolio = () => {
	return (
		<section id="portfolio" className="container portfolio">
			<SectionHeader title="Portfolio" subTitle="My Work" />

			<div className="section-content">
				<nav>
					<ul>
						<li>
							<a href="#all">All</a>
						</li>
						<li>
							<a href="#design">Design</a>
						</li>
						<li>
							<a href="#brand">Brand</a>
						</li>
						<li>
							<a href="#photos">Photos</a>
						</li>
					</ul>
				</nav>

				<div className="masonary-content">
					{data.map((item) => (
						<img key={item.id} src={`img/${item.image}`} alt="" />
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
