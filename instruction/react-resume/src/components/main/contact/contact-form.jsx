import React from "react";

const ContactForm = () => {
	return (
		<form action="">
			<div className="form-row">
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Type your name"
					className="form-control"
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Type your email"
					className="form-control"
				/>
			</div>
			<div className="form-row">
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Type your message"
					className="form-control"
				></textarea>
			</div>
			<button className="btn">Send Message</button>
		</form>
	);
};

export default ContactForm;
