import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="TopBar">
      <div className="GeneralOptionsBox">
        <div className="MenuOption"> Lista Badań </div>
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
        <div className="MenuProfileOption"> Zaloguj </div>
        <div className="MenuProfileOption"> Zarejestruj się </div>
      </div>
    </div>
  );
};

export { Header };
