import { connect } from "react-redux";
import {
  openSignUpModal,
  closeSignUpModal
} from "../../../store/sign-up-modal/actions";
import { MainBannerLayout } from "./layout/MainBanner";

const mapStateToProps = state => {
  return {
    signUpModalState: state.signUpModalState
  };
};
const mapDispatchToProps = { openSignUpModal, closeSignUpModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBannerLayout);
