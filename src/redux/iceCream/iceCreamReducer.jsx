import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
	iceCreamQuantity: 20,
};

const iceCreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				iceCreamQuantity: state.iceCreamQuantity - action.payload,
			};
		default:
			return state;
	}
};

export default iceCreamReducer;
