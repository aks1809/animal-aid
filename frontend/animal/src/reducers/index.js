import { combineReducers } from "redux";
import { reducer as donateReducer } from "redux-form";

export default combineReducers({
  donateForm: donateReducer,
});
