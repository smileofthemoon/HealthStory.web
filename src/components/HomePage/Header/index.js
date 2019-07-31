import { connect } from "react-redux";
import { openLoginModal } from "../../../store/login-modal/actions";
import { HeaderLayout } from "./layout/Header";

const mapStateToProps = (state) => {
  return {
    loginModalState: state.loginModalState
  }
};
const mapDispatchToProps = { openLoginModal };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayout);
