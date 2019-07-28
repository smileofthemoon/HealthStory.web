import React from "react";
import "./LoginBox.css";

const LoginBox = () => {
  return (
    <div className="LoginBox">
      <div className="ClosingBox">x</div>
      <div className="LoginBoxTitle"> Zaloguj się </div>
      <div className="LoginBoxSubtitle">
        Nie masz jeszcze konta?
        <span className="LoginBoxBoldSubtitle"> Zarejestruj. </span>{" "}
      </div>

      <div className="LoginButtonsInputs">
        <div className="LoginInputs">
          <input className="EmailInput" type="text" value="e-mail" />
          <input className="PasswordInput" type="text" value="hasło" />
        </div>

        <div className="AdditionalLoginOptions">
          <div className="LoginByTitle"> Zaloguj przy pomocy:</div>
          <img
            className="LoginFacebook"
            alt="facebook"
            src="http://oi68.tinypic.com/17766r.jpg"
          />
          <img className="LoginGoogle" src="https://i.imgur.com/Sw7Lq09.png" alt="google"/>
        </div>
      </div>
      <button className="LoginButton"> ZALOGUJ </button>
    </div>
  );
};
export { LoginBox };
