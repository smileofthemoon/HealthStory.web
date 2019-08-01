import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from "./const";

const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL
  };
};

const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL
  };
};

export { openLoginModal, closeLoginModal };
