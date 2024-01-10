import store from "../store";
import { setLang } from "../store/slices/locale-slice";

let langFile = require("./langs/ru.json");


export const langs = [
	{ title: "English", code: "en", country: "gb" },
	{ title: "Türkçe", code: "tr", country: "tr" },
	{ title: "Français", code: "fr", country: "fr" },
	{ title: "Deutsch", code: "de", country: "de" },
	{ title: "Русский", code: "ru", country: "ru" },
	{ title: "عربي", code: "ar", country: "sa" },
	{ title: "Italiano", code: "it", country: "it" },
];

export const getCurrentLang = () => {
	// Componnet içinden store a erişmek için useState kullanılır. Ancak component olmayan js dosyalarında useState kullanılamaz
	// Bu sebeple aşağıdaki yöntem kullanıldı.
	return store.getState().locale.lang;
};

export const setCurrentLang = (lang) => {
    langFile = require(`./langs/${lang.code}.json`);
	store.dispatch(setLang(lang));
    
};

export const $t = (key) => {
    return langFile[key];
}