const initialState = {
  loginModalIsOpen: false
};

const loginModalState = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return {
        loginModalIsOpen: true
      };
    case "CLOSE_LOGIN_MODAL":
      return {
        loginModalIsOpen: false
      };
    default:
      return state;
  }
};

export { loginModalState };
