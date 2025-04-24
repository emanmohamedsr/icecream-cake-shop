import { BUY_ICECREAM } from "./actionTypes";

export const buyIcecream = (quantity) => {
	return {
		type: BUY_ICECREAM,
		payload: quantity,
	};
};
