import { COUNTER_DOWN, COUNTER_RESET, COUNTER_UP } from "../types";
import { counterInitialState } from "./initialState";

export const counterReducer = (state = counterInitialState, action) => {
	// Bu kısımda state ler güncellenir. Dönen return değeri aynen state aktarılır.
	if (action.type === COUNTER_UP) {
		return { ...state, counter: state.counter + 1 };
	} else if (action.type === COUNTER_DOWN) {
		if (state.counter > 0) {
			return { ...state, counter: state.counter - 1 };
		}
	} else if (action.type === COUNTER_RESET) {
		return { ...state, counter: action.payload };
	}


    // Bu satır hiç bir if case ine girmediğinde geriye mevcut state i göndersin diye yazıldı.
    // Eğer unutulursa tüm state boşalır.
    return state;
};
