import React from "react";
import { Helmet } from "react-helmet";
import WhatIsEvent from "../Components/WhatIsEvent/WhatIsEvent";
import DigitalTransformation from "../Components/DigitalTransformation/DigitalTransformation";
import CoOperation from "../Components/CoOperation/CoOperation";
import WhyThisEvent from "../Components/WhyThisEvent/WhyThisEvent";
import Creativity from "../Components/Creativity/Creativity";
import Sponser from "../Components/Sponser/Sponser";
import EventDetails from "../Components/EventDetails/EventDetails";
import RegisterWithUs from "../Components/RegisterWithUs/RegisterWithUs";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import Ministry_Of_Tourism from "../Components/Ministry_Of_Tourism/Ministry_Of_Tourism";
import { useTranslation } from "react-i18next";
import HomeSection from "../Components/HomeSection";
import MinisterSection from "../Components/MinisterSection";
import Banner from "../Components/Banner";
import RegisterBanner from "../Components/RegisterBanner";
import DontMissBanner from "../Components/DontMissBanner";
import FlipCards from "../Components/FlipCards";
import VideoSection from "../Components/VideoSection";
import Organizations from "../Components/Organizations";
import Speackers from "../Components/Speackers";
import Ministry_Of_Tourism_2 from "../Components/Ministry_Of_Tourism_2";

const Home = () => {
  const { i18n, t } = useTranslation();

  return (
    <main dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <Helmet>
        <title>{t("home.title")}</title>
      </Helmet>
      <section className="relative">
        <HomeSection />
        {/* <SponserMinister /> */}
        <WhatIsEvent />
        <MinisterSection />
        <Banner />
        <DigitalTransformation />
        <CoOperation />
        <Creativity />
        <Ministry_Of_Tourism_2 />
        <Organizations />
        <RegisterBanner />
        <FlipCards />
        <Speackers from_home={true} />
        <div className="relative z-10 text-white">
          <div
            className=" w-full justify-center gap-x-12 text-6xl font-bold mt-8 mb-12 text-center bg-[#28A4A8A6] md:py-3 py-[16px]"
            dir="ltr"
          >
            <div className="md:font-bold md:text-[33px] text-[27px] text-white md:py-5 py-2 -z-10">
              {t("common.know_sponsors")}
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <Sponser />
        </div>
        <DontMissBanner />
        <VideoSection />
        <div className="mb-8">
          <Ministry_Of_Tourism />
        </div>
        <GetNewUpdates />
      </section>
    </main>
  );
};

export default Home;
