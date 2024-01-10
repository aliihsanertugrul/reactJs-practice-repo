import React from "react";
import SectionHeader from "../../common/section-header";
import data from "../../../data/testimonals.json";
import Testimonal from "./testimonal";
import "./style.css";

const Client = () => {
	return (
		<section id="client" className="container client">
			<SectionHeader title="Testimonal" subTitle="Client Speak" />

			<div className="section-content">
				<div className="testimonals">
					{/* <Testimonal
							key={item.id}
							image={item.image}
							name={item.name}
							location={item.location}
							message={item.message}
							rate={item.rate}
						/> */}

					{data.map((item) => (
						<Testimonal key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Client;
