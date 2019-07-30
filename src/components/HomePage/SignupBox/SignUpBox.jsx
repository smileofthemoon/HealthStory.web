import React from "react";
import "./SignUpBox.css";

const SignUpBox = () => {
  return (
    <div className="signup-box">
      <div className="ClosingBox">X</div>
      <div className="LoginBoxTitle"> Zarejestruj się </div>
      <div className="LoginBoxSubtitle">
        Masz już konto?
        <span className="LoginBoxBoldSubtitle"> Zaloguj </span>{" "}
      </div>

      <div className="LoginButtonsInputs">
        <div className="LoginInputs">
          <input className="EmailInput" type="text" placeholder="e-mail*" />
          <input
            className="PasswordInput"
            type="password"
            placeholder="hasło*"
          />
          <input
            className="PasswordInput"
            type="password"
            placeholder="powtórz hasło*"
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
        <button className="LoginButton"> ZAREJESTRUJ SIĘ </button>
      </div>
    </div>
  );
};
export { SignUpBox };
