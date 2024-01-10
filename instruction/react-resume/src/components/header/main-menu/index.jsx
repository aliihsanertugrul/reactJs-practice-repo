import React from "react";
import { TfiMenu } from "react-icons/tfi";
import "./style.css";

const MainMenu = () => {
	return (
		<>
			<label htmlFor="chkMenu" className="lbl-menu">
				<TfiMenu />
			</label>
			<input type="checkbox" name="" id="chkMenu" className="chk-menu" />

			<nav className="main-menu">
				<ul>
					<li>
						<a href="#home" title="John Doe home page">
							Home
						</a>
					</li>
					<li>
						<a href="#about" title="About John Doe">
							About
						</a>
					</li>
					<li>
						<a href="#what-to-do" title="My experience">
							What to Do
						</a>
					</li>
					<li>
						<a href="#resume">Resume</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#client">Client</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MainMenu;
