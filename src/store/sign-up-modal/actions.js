import { OPEN_SIGN_UP_MODAL, CLOSE_SIGN_UP_MODAL } from "./const";

const openSignUpModal = () => {
  return {
    type: OPEN_SIGN_UP_MODAL
  };
};

const closeSignUpModal = () => {
  return {
    type: CLOSE_SIGN_UP_MODAL
  };
};

export { openSignUpModal, closeSignUpModal };
