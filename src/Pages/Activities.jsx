import React from "react";
// import aboutImage from "../Images/aboutImage.png";
// import dinner from "../Images/dinner.png";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Activities = () => {
  const { i18n } = useTranslation();

  return (
    <section
      className={`about grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:col-span-12 col-span-12 back-ground">
        {/* <img
          src={aboutImage}
          className="about-img col-span-12"
          alt="aboutImage"
        /> */}
        <div className="text text-center">
          <h3>{i18n.t("activities.title")}</h3>
          <p className="mt-6 text-white">{i18n.t("activities.powered_by")}</p>
        </div>
      </div>

      <div className="col-span-12">
        <div className="lg:grid md:grid grid-cols-12 mt-4 mb-10">
          <div className="col-span-12 my-auto">
            <p className="text-[#44add2] font-bold text-xl mb-3 text-center">
              {i18n.t("activities.international_conference_title")}
            </p>
            <p className="text-[#103783] font-bold text-3xl text-center">
              {i18n.t("activities.learn_about_activities")}
            </p>
            <p className="text-sm px-4 mt-4 text-justify">
              {i18n.t("activities.activities_description")}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 px-3 mb-12">
        <div className="lg:grid md:grid grid-cols-12 mt-4 mb-10">
          <div className="col-span-12 my-auto">
            <p className="text-[#44add2] font-bold text-xl mb-3">
              {i18n.t("activities.enhance_your_presence")}
            </p>
            <p className="text-[#103783] font-bold text-3xl">
              {i18n.t("activities.through_your_participation")}
            </p>
            <p className="text-sm mt-4">
              {i18n.t("activities.participation_description")}
            </p>
          </div>
        </div>
        <div className="lg:flex md:flex sm:flex justify-around items-center">
          <div className="flex items-center gap-6">
            {/* <img src={dinner} className="w-28" alt="Dinner" /> */}
            <p className="text-xl font-bold">{i18n.t("activities.dinner")}</p>
          </div>
          <div className="flex items-center gap-6 lg:mt-0 md:mt-0 sm:mt-0 mt-10">
            {/* SVG Icon Code Here */}
            <p className="text-xl font-bold">
              {i18n.t("activities.facility_tours")}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`why-this-event col-span-12 ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}
      >
        <div className="lg:grid md:grid grid-cols-12 gap-6 mx-auto w-fit">
          <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto text-white">
            <p className="text-2xl font-bold">
              {i18n.t("activities.enhance_your_presence")}
            </p>
            <p className="text-sm my-3">
              {i18n.t("activities.participation_opportunity")}
            </p>
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:block md:block flex justify-center">
            <button className="btn-why-this-event">
              <Link to={"/about"}>{i18n.t("activities.contact_us")}</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <GetNewUpdates />
      </div>
    </section>
  );
};

export default Activities;
