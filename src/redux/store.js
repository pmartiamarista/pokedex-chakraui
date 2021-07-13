import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, require("redux-logger").default];
}

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
