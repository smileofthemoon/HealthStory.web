import React from "react";
import "./FeaturesPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faChartLine,
  faPlus,
  faHistory
} from "@fortawesome/free-solid-svg-icons";

const FeaturesPanel = () => {
  return (
    <div className="Panel">
      <div className="Blank" />
      <div className="PanelText">
        {" "}
        POZNAJ PLUSY <span className="BluePanelText"> &nbsp;HEALTH.STORY</span>
      </div>
      <div className="PanelElements">
        <div className="FeatureElement">
          <div className="ElementImage ElementImage--services" />
          <div className="IconCircle">
            <div className="Circle">
              <FontAwesomeIcon icon={faLaptop} size="2x" />
            </div>
          </div>
          <div className="ElementTextbox">
            <div className="ElementTitle"> Przejrzystość obsługi </div>
            <div className="ElementDescription">
              Łatwy w obsłudze system do wprowadzania różnego rodzaju badań
              diagnostycznych.
            </div>
          </div>
        </div>
        <div className="FeatureElement">
          <div className="ElementImage ElementImage--history" />
          <div className="IconCircle">
            <div className="Circle">
              <FontAwesomeIcon icon={faHistory} size="2x" />
            </div>
          </div>
          <div className="ElementTextbox">
            <div className="ElementTitle"> Na wyciągnięcie ręki </div>
            <div className="ElementDescription">
              Skuteczne i proste przeglądanie historii wykonanych badań.
            </div>
          </div>
        </div>
        <div className="FeatureElement">
          <div className="ElementImage ElementImage--analysis" />
          <div className="IconCircle">
            <div className="Circle">
              <FontAwesomeIcon icon={faChartLine} size="2x" />
            </div>
          </div>
          <div className="ElementTextbox">
            <div className="ElementTitle"> Skuteczna analiza </div>
            <div className="ElementDescription">
              Czytelne wykresy umożliwiające szybkie i skuteczne porównanie
              wyników na przestrzeni czasu.
            </div>
          </div>
        </div>
        <div className="FeatureElement">
          <div className="ElementImage ElementImage--additional" />
          <div className="IconCircle">
            <div className="Circle">
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </div>
          </div>
          <div className="ElementTextbox">
            <div className="ElementTitle"> Dodatkowe funkcje </div>
            <div className="ElementDescription">
              Dostepna porownywarka cen poszczegolnych badan oraz wyszukiwanie
              laboratoriow wzgledem lokalizacji.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturesPanel };
