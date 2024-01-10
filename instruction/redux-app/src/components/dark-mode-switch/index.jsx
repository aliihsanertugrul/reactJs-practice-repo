import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/slices/theme-slice";
import { $t } from "../../helpers/locale-helper";

const DarkModeSwitch = () => {
	const isDarkMode = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();

	return (
		<div>
			<Form.Check
				data-bs-theme="dark"
				type="switch"
				id="custom-switch"
				label={isDarkMode ? $t("light-mode") : $t("dark-mode")}
				checked={isDarkMode}
				onChange={() => dispatch(setDarkMode(!isDarkMode))}
			/>
		</div>
	);
};

export default DarkModeSwitch;
