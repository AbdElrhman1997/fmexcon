import React from "react";
import aboutImage from "../Images/aboutImage.png";
import sponsers_image1 from "../Images/sponsers-image1.png";
import sponsers_image2 from "../Images/sponsers-image2.png";
import sponsers_image3 from "../Images/sponsers-image3.png";
import WhyThisEvent1 from "../Images/WhyThisEvent1.png";
import WhyThisEvent2 from "../Images/WhyThisEvent2.png";
import WhyThisEvent3 from "../Images/WhyThisEvent3.png";
import MapImage from "../Images/Map.png";
import MapPdf from "../Images/files/Map.pdf";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import EventDetails from "../Components/EventDetails/EventDetails";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import RegistrationForm from "../Components/RegistrationForm";
import RegisterWithUsImage from "../Images/RegisterWithUs.png";
import { Link } from "react-router-dom";
import Sponser from "../Components/Sponser/Sponser";

const Sponsor = () => {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <section
        className="min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 text-center relative"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="lg:col-span-12 col-span-12 back-ground">
          <img
            src={aboutImage}
            className="about-img col-span-12"
            alt={t("sponsor_1.aboutImage")}
          />
          <div className="text">
            <h3>{t("sponsor_1.exhibit_with_us")}</h3>
            <a
              href="https://sfma.sa"
              target="_blank"
              className="mt-6 text-white block "
            >
              {t("about.poweredBy")}
            </a>
          </div>
        </div>
        <div className="col-span-12">
          <GetNewUpdates />
        </div>
        <div className="col-span-12">
          <div className="lg:grid md:grid grid-cols-12 lg:px-16 md:px-16 px-4 mb-10 -mt-6">
            <div className="lg:col-span-5 md:col-span-5 col-span-12 px-3 text-right">
              <p
                style={{
                  color: "rgb(16, 55, 131)",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {t("sponsor_1.boost_presence")}
              </p>
            </div>
            <div className="lg:col-span-7 md:col-span-7 col-span-12 mx-4">
              <p className="text-sm leading-loose text-justify">
                {t("sponsor_1.promotion_text")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f5] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 gap-8 col-span-12 py-16">
          <div className="card bg-white shadow-lg p-4 rounded-xl">
            <div className="flex items-center mb-4">
              <img
                src={sponsers_image1}
                alt={t("sponsor_1.card1_title")}
                className="w-16 h-16 object-cover mr-4"
              />
              <h2 className="text-xl font-semibold text-[#44add2]">
                {t("sponsor_1.card1_title")}
              </h2>
            </div>
            <p className="text-[#212229] px-2 pb-2 text-justify">
              {t("sponsor_1.card1_text")}
            </p>
          </div>

          <div className="card bg-white shadow-lg p-4 rounded-xl">
            <div className="flex items-center mb-4">
              <img
                src={sponsers_image2}
                alt={t("sponsor_1.card2_title")}
                className="w-16 h-16 object-cover mr-4"
              />
              <h2 className="text-xl font-semibold text-[#44add2]">
                {t("sponsor_1.card2_title")}
              </h2>
            </div>
            <p className="text-[#212229] px-2 pb-2 text-justify">
              {t("sponsor_1.card2_text")}
            </p>
          </div>

          <div className="card bg-white shadow-lg p-4 rounded-xl">
            <div className="flex items-center mb-4">
              <img
                src={sponsers_image3}
                alt={t("sponsor_1.card3_title")}
                className="w-16 h-16 object-cover mr-4"
              />
              <h2 className="text-xl font-semibold text-[#44add2]">
                {t("sponsor_1.card3_title")}
              </h2>
            </div>
            <p className="text-[#212229] px-2 pb-2 text-justify">
              {t("sponsor_1.card3_text")}
            </p>
          </div>
        </div>

        <div className="col-span-12 my-6">
          <EventDetails />
        </div>

        <div className="col-span-12">
          <p className="text-2xl mb-2 mt-4 text-center text-[#44add2] font-bold">
            {t("sponsor_1.why_sponsor_title")}
          </p>
          <p className="text-sm text-center text-[#212529] lg:mx-40 md:mx-28 px-4 mb-6 font-bold">
            {t("sponsor_1.why_sponsor_text")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 col-span-12 lg:px-16 md:px-16 px-4">
            <div className="card p-4">
              <img
                src={WhyThisEvent1}
                alt={t("sponsor_1.location")}
                className="mx-auto mb-4 w-full object-cover"
              />
              <h2 className="text-lg font-bold mb-2 text-[#44add2]">
                {t("sponsor_1.location")}
              </h2>
              <p className="text-[#212529] text-justify">
                {t("sponsor_1.location_text")}
              </p>
            </div>
            <div className="card p-4">
              <img
                src={WhyThisEvent2}
                alt={t("sponsor_1.target_audience")}
                className="mx-auto mb-4 w-full object-cover"
              />
              <h2 className="text-lg font-bold mb-2 text-[#44add2]">
                {t("sponsor_1.target_audience")}
              </h2>
              <p className="text-[#212529] text-justify">
                {t("sponsor_1.target_audience_text")}
              </p>
            </div>
            <div className="card p-4">
              <img
                src={WhyThisEvent3}
                alt={t("sponsor_1.participants")}
                className="mx-auto mb-4 w-full object-cover"
              />
              <h2 className="text-lg font-bold mb-2 text-[#44add2]">
                {t("sponsor_1.participants")}
              </h2>
              <p className="text-[#212529] text-justify">
                {t("sponsor_1.participants_text")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <Sponser />
        </div>
        {/* <div className="col-span-12 my-6">
          <Sponser />
        </div> */}

        <div className="col-span-12">
          <section
            className="register-with-us my-8 lg:px-16 md:px-16 px-5 py-16 text-right"
            dir="rtl"
          >
            <div className="lg:grid md:grid grid-cols-12">
              <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto mb-12">
                <p
                  className="text-2xl"
                  style={{ color: "rgb(68, 173, 210)", fontWeight: "bold" }}
                >
                  {t("sponsor_1.dont_miss_event")}
                </p>
                <p className="mt-2 mb-8 text-3xl lg:w-96 lg:leading-relaxed md:leading-relaxed leading-10">
                  {t("sponsor_1.boost_presence_slogan")}
                </p>
                <div className="flex justify-start lg:-translate-x-0 md:-translate-x-0 -translate-x-5">
                  <button className="btn-register col-span-12 lg:block md:block flex justify-center p-0">
                    <a href="/ar/register#ConferanceLogin">
                      {t("sponsor_1.register_with_us")}
                    </a>
                  </button>
                  <button className="btn-view h-fit my-auto p-0">
                    <Link
                      to={
                        i18n.language === "en"
                          ? `/en/sponsores#sponserForm`
                          : `/ar/sponsores#sponserForm`
                      }
                    >
                      {t("sponsor_1.exhibit_with_us_button")}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6 md:col-span-6 col-span-12 mx-2">
                <img
                  src={RegisterWithUsImage}
                  className="mx-auto w-full my-4"
                  alt={t("sponsor_1.register_image_alt")}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-12">
          <img
            src={MapImage}
            alt={t("sponsor_1.map_image_alt")}
            className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full mx-auto my-6"
          />
          <a
            href={MapPdf} // Update this to the correct file path
            download="SFMA EXPO - FLOOR 25.pdf" // Update the file name for download
            className="block text-center px-7 py-3 bg-[#44add2] hover:bg-[#319cc4] rounded-xl w-fit mx-auto mt-4 text-white cursor-pointer"
          >
            {t("sponsor_1.download_map")}
          </a>
        </div>

        <div className="col-span-12">
          <RegistrationForm />
        </div>
        <div id="sponserForm"></div>
      </section>
      <Helmet>
        <title>{t("sponsor_1.page_title")}</title>
      </Helmet>
    </section>
  );
};

export default Sponsor;
