import React from "react";
import "./LoginBox.css";

const LoginBoxLayout = props => {
  const CloseLoginModal = () => {
    props.closeLoginModal();
  };

  return (
    <div className="LoginBox">
      <div className="ClosingBox" onClick={CloseLoginModal}>
        X
      </div>
      <div className="LoginBoxTitle"> Zaloguj się </div>
      <div className="LoginBoxSubtitle">
        Nie masz jeszcze konta?
        <span className="LoginBoxBoldSubtitle"> Zarejestruj. </span>{" "}
      </div>

      <div className="LoginButtonsInputs">
        <div className="LoginInputs">
          <input className="EmailInput" type="text" placeholder="e-mail" />
          <input
            className="PasswordInput"
            type="password"
            placeholder="hasło"
          />
        </div>

        <div className="AdditionalLoginOptions">
          <div className="LoginByTitle"> Zaloguj przy pomocy:</div>
          <div className="LoginTypeImg">
            <img
              className="LoginFacebook"
              alt="facebook"
              src="http://oi68.tinypic.com/17766r.jpg"
            />
          </div>
          <div className="LoginTypeImg">
            <img
              className="LoginGoogle"
              src="https://i.imgur.com/Sw7Lq09.png"
              alt="google"
            />
          </div>
        </div>
      </div>
      <div className="LoginButtonBox">
        <button className="LoginButton"> ZALOGUJ </button>
      </div>
    </div>
  );
};
export { LoginBoxLayout };
