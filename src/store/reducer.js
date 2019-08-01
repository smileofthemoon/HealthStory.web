import { combineReducers } from "redux";
import { loginModalState } from "./login-modal/reducer";
import { signUpModalState } from "./sign-up-modal/reducer";

export default combineReducers({
  loginModalState,
  signUpModalState
});
