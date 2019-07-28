import React, { useState } from "react";
import Modal from "react-modal";

import { LoginBox } from "../LoginBox/LoginBox";
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

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  const LoginButtonOnClick = () => {
    setLoginModalIsOpen(true);
  };

  const CloseLoginModal = () => {
    setLoginModalIsOpen(false);
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
          className="Logo"
          src={window.location.origin + "/logo-01.png"}
          alt="Logo"
        />
      </div>

      <div className="ProfileOptionsBox">
        <div className="MenuProfileOption" onClick={LoginButtonOnClick}>
          Zaloguj
        </div>
        <div className="MenuProfileOption"> Zarejestruj się </div>
      </div>

      <Modal
        isOpen={loginModalIsOpen}
        style={customStyles}
        onRequestClose={CloseLoginModal}
      >
        <LoginBox />
      </Modal>
    </div>
  );
};

export { Header };
