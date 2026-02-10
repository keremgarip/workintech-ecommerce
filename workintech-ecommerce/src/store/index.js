import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "../reducers/clientReducer";
import productReducer from "../reducers/productReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;