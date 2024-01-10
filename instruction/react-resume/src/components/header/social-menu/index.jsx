import React from "react";
import { TfiTwitter, TfiLinkedin, TfiFacebook } from "react-icons/tfi";
import "./style.css";

const SocialMenu = () => {
	return (
		<nav className="social">
			<ul>
				<li>
					<a href="https://x.com" target="_blank" rel="noreferrer">
						<TfiTwitter />
					</a>
				</li>
				<li>
					<a href="https://linkedin.com" rel="noreferrer">
						<TfiLinkedin />
					</a>
				</li>
				<li>
					<a
						href="http://facebook.com"
						target="_blank"
						rel="noreferrer"
					>
						<TfiFacebook />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SocialMenu;
