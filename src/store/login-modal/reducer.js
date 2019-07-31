const initialState = {
  loginModalIsOpen: false
}

const loginModalState = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN_MODAL':
      return {
        loginModalIsOpen: true
      }
    default:
      return state;
  }
}

export { loginModalState };
