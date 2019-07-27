import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { UserBar } from "./components/UserBar/UserBar";
import { MainBanner } from "./components/MainBanner/MainBanner";
import { FeaturesPanel } from "./components/FeaturesPanel/FeaturesPanel";
import { AppAdvert } from "./components/AppAdvert/AppAdvert";
import { FooterSection } from "./components/FooterSection/FooterSection";

const App = () => {
  return (
    <div className="app">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <Header />
      <div className="Content">
        <UserBar />
        <MainBanner />
        <FeaturesPanel />
        <AppAdvert />
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
