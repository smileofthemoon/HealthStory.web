import React from "react";
import "./MainBanner.css";

const MainBannerLayout = props => {
  return (
    <div className="Banner">
      <div className="BannerTitle">
        Zadbaj o swoje zdrowie, <br /> kontroluj wyniki badań.
      </div>
      <div className="BannerSubtitle">
        Wprowadź swoje wyniki, <br /> a my przygotujemy dla Ciebie statystyki.
      </div>
      <div className="SignUpBox">
        <div className="SBox" onClick={props.openSignUpModal}>
          {" "}
          ZAREJESTRUJ SIĘ >{" "}
        </div>
      </div>
    </div>
  );
};

export { MainBannerLayout };
