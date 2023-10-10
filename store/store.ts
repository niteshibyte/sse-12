
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import {rootReducer} from '../reducer'
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
 applyMiddleware(...middleware)
);
export default store;