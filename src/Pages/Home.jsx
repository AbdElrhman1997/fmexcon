import React from "react";
import { Helmet } from "react-helmet";
import WhatIsEvent from "../Components/WhatIsEvent/WhatIsEvent";
import DigitalTransformation from "../Components/DigitalTransformation/DigitalTransformation";
import CoOperation from "../Components/CoOperation/CoOperation";
import WhyThisEvent from "../Components/WhyThisEvent/WhyThisEvent";
import SponserMinister from "../Components/SponserMinister/SponserMinister";
import Creativity from "../Components/Creativity/Creativity";
import Sponser from "../Components/Sponser/Sponser";
import EventDetails from "../Components/EventDetails/EventDetails";
import VideoSection from "../Components/VideoSection/VideoSection";
import RegisterWithUs from "../Components/RegisterWithUs/RegisterWithUs";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import Ministry_Of_Tourism from "../Components/Ministry_Of_Tourism/Ministry_Of_Tourism";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { i18n, t } = useTranslation();

  return (
    <main dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <Helmet>
        <title>{t("home.title")}</title>
      </Helmet>
      <section className="relative">
        <section className="relative flex flex-col justify-center homeSec">
          <div className="flex sm:flex-row justify-center items-center absolute bottom-8 left-0 right-0 mx-auto w-full px-4 max-w-2xl xl:gap-x-20 lg:gap-x-20 md:gap-x-20 gap-x-4">
            <button
              className="btn-view-home h-fit w-full lg:px-12 md:px-12 px-4 py-[9px] text-sm font-semibold hover:bg-main hover:text-white"
              aria-label={t("home.show_with_us")}
              disabled={true}
            >
              <Link
                to={
                  i18n.language === "en"
                    ? `/en/sponsores#sponserForm`
                    : `/ar/sponsores#sponserForm`
                }
              >
                {t("home.show_with_us")}
              </Link>
            </button>
            <button
              className="btn-register-home h-fit w-full lg:px-12 md:px-12 px-4 py-[9px] text-sm font-semibold hover:bg-white hover:text-main hover:outline hover:outline-main"
              aria-label={t("home.register_with_us")}
              disabled={true}
            >
              <Link
                to={i18n.language === "en" ? `/en/register` : `/ar/register`}
              >
                {t("home.register_with_us")}
              </Link>
            </button>
          </div>
        </section>
        {/* <SponserMinister /> */}
        <WhatIsEvent />
        <Ministry_Of_Tourism />
        <VideoSection />
        <div className="my-6">
          <EventDetails />
        </div>
        <DigitalTransformation />
        <CoOperation />
        <Creativity />
        <WhyThisEvent />
        <div className="mb-16">
          <Sponser />
        </div>
        <RegisterWithUs />
        <GetNewUpdates />
      </section>
    </main>
  );
};

export default Home;
