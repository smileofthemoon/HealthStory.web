import { connect } from "react-redux";
import { openLoginModal, closeLoginModal } from "../../../store/login-modal/actions";
import { openSignUpModal } from "../../../store/sign-up-modal/actions";
import { HeaderLayout } from "./layout/Header";

const mapStateToProps = state => {
  return {
    loginModalState: state.loginModalState
  };
};

const mapDispatchToProps = {
  openLoginModal,
  closeLoginModal,
  openSignUpModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout);
