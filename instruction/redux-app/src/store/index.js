import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme-slice";
import localeReducer from "./slices/locale-slice";



export default configureStore({
    reducer: {
        theme: themeReducer,
        locale: localeReducer
    }
})