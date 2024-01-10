import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
	name: "locale",
	initialState: {
		lang: { title: "Русский", code: "ru", country: "ru" },
		currency: "RUB",
		timeZone: "GMT+3",
	},
	reducers: {
		setLang: (state, action) => {
			state.lang = action.payload;
		},

		setCurrency: (state, action) => {
			state.currency = action.payload;
		},

		setTimeZone: (state, action) => {
			state.timeZone = action.payload;
		},
	},
});

export const { setLang, setCurrency, setTimeZone } = localeSlice.actions;
export default localeSlice.reducer;
