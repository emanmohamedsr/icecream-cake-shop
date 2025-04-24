import { BUY_CAKE } from "./actionTypes";

const initialState = {
	cakeQuantity: 10,
};

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				cakeQuantity: state.cakeQuantity - action.payload,
			};
		default:
			return state;
	}
};

export default cakeReducer;
