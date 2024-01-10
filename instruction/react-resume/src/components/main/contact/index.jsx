import React from "react";
import SectionHeader from "../../common/section-header";
import ContactForm from "./contact-form";
import "./style.css";
import SocialMenu from "../../header/social-menu";
import Address from "./address";

const Contact = () => {
	return (
		<section id="contact" className="container contact">

            <SectionHeader title="Contact" subTitle="Get In Touch"/>

			<div className="section-content">
				<div className="row">
					<div className="left">
						<h4>ADDRESS</h4>
						<Address/>

						<h4>FOLLOW ME</h4>
						<SocialMenu/>
                        

					</div>
					<div className="right">
						<h4>SEND US A NOTE</h4>
						<ContactForm/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
