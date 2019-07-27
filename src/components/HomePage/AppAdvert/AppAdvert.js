import React from "react";
import "./AppAdvert.css";

const AppAdvert = () => {
  return (
    <div className="AppAd">
      <div className="AdImage" />
      <div className="AdText">
        <div className="AdMainTitle">
          Prostota i łatwość obsługi.
          <br /> Wszystko w jednym miejscu.
        </div>
        <div className="AdSubtitle">Wypróbuj naszą aplikację!</div>

        <div className="AppDetails">
          <div className="AppDescription">
            - Przypomnienia o nadchodzących badaniach <br />
            - Historia badań w zasięgu ręki <br />- Wyszukiwarka laboratoriów,
            które są w pobliżu
          </div>
          <div className="AppDownload">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"
              className="QRcode"
              alt="qrcode"
            />
            <img
              src="https://www.airconwithme.com/wp-content/uploads/2016/08/appstore.png"
              className="AppStore"
              alt="app store"
            />
            <img
              src="https://families.google.com/familylink/static/img/google-play/googleplay.png?cache=42c89d9"
              className="GooglePlay"
              alt="google play"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export { AppAdvert };
