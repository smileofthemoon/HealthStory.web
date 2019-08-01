import React from "react";
import Modal from "react-modal";

import LoginBox from "../../HomePage/LoginBox/index";
import SignUpModal from "../../HomePage/SignUpModal/index";
import { history } from "../../../helpers/history";

import "./Header.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const onDashboardLinkClick = () => {
  history.push("/dashboard");
};

const onLogoClick = () => {
  history.push("/");
};

const HeaderLayout = props => {
  const LoginButtonOnClick = () => {
    props.openLoginModal();
  };

  const CloseLoginModal = () => {
    props.closeLoginModal();
  };

  const SignUpButtonOnClick = () => {
    props.openSignUpModal();
  };

  return (
    <div className="TopBar">
      <div className="GeneralOptionsBox">
        {/* <div className="MenuOption" onClick={onDashboardLinkClick}>
          {" "}
          Lista Badań{" "}
        </div>
        <div className="MenuOption"> Laboratoria </div>
        <div className="MenuOption"> Kontakt </div> */}
      </div>
      <div className="LogoBox">
        <img
          onClick={onLogoClick}
          className="Logo"
          src={window.location.origin + "/logo-01.png"}
          alt="Logo"
        />
      </div>

      <div className="ProfileOptionsBox">
        <div className="MenuProfileOption" onClick={LoginButtonOnClick}>
          Zaloguj
        </div>
        <div className="MenuProfileOption" onClick={SignUpButtonOnClick}>
          {" "}
          Zarejestruj się{" "}
        </div>
      </div>

      <Modal
        isOpen={props.loginModalState.loginModalIsOpen}
        style={customStyles}
        onRequestClose={CloseLoginModal}
      >
        <LoginBox />
      </Modal>

      <SignUpModal />
    </div>
  );
};

Modal.setAppElement("body");

export { HeaderLayout };
