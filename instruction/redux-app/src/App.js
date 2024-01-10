import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { $t } from "./helpers/locale-helper";

const App = () => {
	const isDarkMode = useSelector((state) => state.theme.darkMode);
	const currentLang = useSelector((state) => state.locale.lang);

	return (
		<div className={`app ${isDarkMode ? "dark" : ""}`}>
			<Header />

      <main className="container my-4">
        <h2>{$t("hello-world")}</h2>
        <p>{$t("home-page-paragraph-weather")}</p>

      </main>
		</div>
	);
};

export default App;
