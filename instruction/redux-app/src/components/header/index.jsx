import React from "react";
import DarkModeSwitch from "../dark-mode-switch";
import LangSwitch from "../lang-switch";

const Header = () => {
	return (
		<div className="d-flex align-items-center justify-content-around bg-info py-3">
			<DarkModeSwitch />
			<LangSwitch />
		</div>
	);
};

export default Header;
