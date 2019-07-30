import React, { useState } from "react";
import Modal from "react-modal";

import { LoginBox } from "../LoginBox/LoginBox";
import { SignUpBox } from "../SignupBox/SignUpBox";
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

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  const LoginButtonOnClick = () => {
    setLoginModalIsOpen(true);
  };

  const CloseLoginModal = () => {
    setLoginModalIsOpen(false);
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
        <div className="MenuOption" onClick={onDashboardLinkClick}>
          {" "}
          Lista Badań{" "}
        </div>
        <div className="MenuOption"> Laboratoria </div>
        <div className="MenuOption"> Kontakt </div>
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
        isOpen={loginModalIsOpen}
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

export { Header };
Modal.setAppElement("body");
