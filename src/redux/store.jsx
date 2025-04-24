import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	iceCream: iceCreamReducer,
	cake: cakeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
