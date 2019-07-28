import React from "react";
import "./HomePage.css";
import { UserBar } from "../UserBar/UserBar";
import { MainBanner } from "../MainBanner/MainBanner";
import { FeaturesPanel } from "../FeaturesPanel/FeaturesPanel";
import { AppAdvert } from "../AppAdvert/AppAdvert";
import { FooterSection } from "../FooterSection/FooterSection";

const HomePage = () => {
  return (
    <div className="homepage">
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

export default HomePage;
