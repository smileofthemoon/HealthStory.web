import React, { useState } from "react";
import Modal from "react-modal";

import LoginBox from "../../LoginBox/index";
import { SignUpBox } from "../../SignupBox/SignUpBox";
import { history } from "../../../../helpers/history";

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
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  const LoginButtonOnClick = () => {
    props.openLoginModal();
  };

  const CloseLoginModal = () => {
    props.closeLoginModal();
  };

  const SignUpButtonOnClick = () => {
    setSignUpModalIsOpen(true);
  };

  const CloseSignUpModal = () => {
    setSignUpModalIsOpen(false);
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

      <Modal
        isOpen={signUpModalIsOpen}
        style={customStyles}
        onRequestClose={CloseSignUpModal}
      >
        <SignUpBox />
      </Modal>
    </div>
  );
};

Modal.setAppElement("body");

export { HeaderLayout };
