import { BUY_CAKE } from "./actionTypes";

export const buycake = (quantity) => {
	return {
		type: BUY_CAKE,
		payload: quantity,
	};
};
