import { combineReducers } from "redux";

import LoginReducer from "./LoginReducer";
import TestRedux from "./TestRedux";

const authReducers = combineReducers({
  LoginReducer,
  TestRedux
});

export default authReducers;
