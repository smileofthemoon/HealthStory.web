import { connect } from "react-redux";
import { closeLoginModal } from "../../../store/login-modal/actions";
import { LoginBoxLayout } from "./layout/LoginBox";

const mapDispatchToProps = { closeLoginModal };

export default connect(
  undefined,
  mapDispatchToProps
)(LoginBoxLayout);
