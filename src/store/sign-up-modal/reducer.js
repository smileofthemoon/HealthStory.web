import { OPEN_SIGN_UP_MODAL, CLOSE_SIGN_UP_MODAL } from "./const";

const initialState = {
  signUpModalIsOpen: false
};

const signUpModalState = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIGN_UP_MODAL:
      return {
        signUpModalIsOpen: true
      };
    case CLOSE_SIGN_UP_MODAL:
      return {
        signUpModalIsOpen: false
      };
    default:
      return state;
  }
};

export { signUpModalState };
