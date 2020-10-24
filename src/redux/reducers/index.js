import { combineReducers } from "redux";
import menuAndCartReducer from "./menuAndCart";
import animateReducer from "./animate";
import authReducer from "./auth";

const indexreducer = combineReducers({
  menuAndCart: menuAndCartReducer,
  animate: animateReducer,
  auth: authReducer,
});

export default indexreducer;
