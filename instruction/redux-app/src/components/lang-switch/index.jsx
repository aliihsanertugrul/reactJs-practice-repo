import React from "react";
import { Dropdown } from "react-bootstrap";
import {
	getCurrentLang,
	langs,
	setCurrentLang,
} from "../../helpers/locale-helper";
import { useSelector } from "react-redux";

const LangSwitch = () => {
	// Aşağıadki useSelector yöntemi ile de mevcut dile değerine ulaşılabilir.
	// FAkat biz harici bir js içinden erişmeyi tercih ettik.
	// const lang = useSelector((state) => state.locale.lang);

	const lang = getCurrentLang();

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				<span className={`fi fi-${lang.country}`}></span> {lang.title}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{langs.map((item) => (
					<Dropdown.Item
						key={item.code}
						onClick={() => setCurrentLang(item)}
					>
						<span className={`fi fi-${item.country}`}></span>{" "}
						{item.title}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default LangSwitch;
