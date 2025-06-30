import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Conditions = () => {
  const { t, i18n } = useTranslation();

  const topics = [
    "conference.topic1",
    "conference.topic2",
    "conference.topic3",
    "conference.topic4",
    "conference.topic5",
    "conference.topic6",
    "conference.topic7",
  ];

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("about.title")}</title>
      </Helmet>
      <div className="lg:col-span-12 col-span-12 back-ground h-[65vh] ">
        <img
          src="/images/banner_bg.webp"
          className="about-img col-span-12 h-[500px]"
          alt={t("about.aboutImageAlt")}
        />
        <div
          className={`text text-center ${
            i18n.language === "en" ? "md:text-left" : "md:text-right"
          }`}
        >
          <h3 className="md:text-7xl text-6xl font-bold leading-snug text-center">
            {t("conditions.title")}
          </h3>
        </div>
      </div>

      <div className="col-span-12 px-3">
        <div className="lg:grid md:grid grid-cols-12   mb-10">
          <div className="col-span-12 my-auto font-semibold">
            <p className="text-text font-bold text-3xl mb-2 mt-4 text-center">
              {t("conditions.call_for_presentations")}
            </p>
          </div>
          <div className="col-span-12 my-auto font-semibold md:px-32 px-4">
            <p className="text-center font-bold text-xl mb-1 text-main leading-normal">
              {t("conditions.conference_overview")}
            </p>
            <p className="text-base text-text my-2 leading-loose text-justify ">
              {t("conditions.conference_description")}
            </p>
          </div>
          <div className="col-span-12">
            <img
              src="/images/date & location.png"
              alt="date & location"
              className=" md:h-32 px-4  bottom-0 z-12 mx-auto mt-2 md:mb-10 mb-6 "
            />
          </div>
          <div className="col-span-12 my-auto bg-[#EEEEEE] py-4">
            <p className="text-text font-bold mb-1 mt-6 text-center text-4xl leading-normal">
              {t("conference.topics_title")}
            </p>
            <div className="flex flex-wrap gap-4 my-12 container mx-auto justify-center">
              {topics.map((topic, index) => (
                <p
                  key={index}
                  className="flex-grow-0 lg:basis-[24%] md:basis-1/3 basis-full text-xl font-semibold bg-text text-white text-center py-12 px-3 rounded-2xl h-[170px] max-h-[200px] flex items-center justify-center leading-relaxed"
                >
                  {t(topic)}
                </p>
              ))}
            </div>
          </div>
          <div
            className={`col-span-12 digital-transformation md:mb-8 mb-4 md:mt-14 md:px-8 px-5 ${
              i18n.language === "en" ? "text-left" : "text-right"
            }`}
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <div className="lg:grid md:grid grid-cols-12 gap-6 ">
              <div className="lg:col-span-6 md:col-span-6 col-span-12 px-6 md:text-justify text-center md:my-auto my-6">
                <p className="md:text-4xl text-2xl font-bold">
                  {t("conditions.invitation")}
                </p>
                <p className=" md:text-[18px] text-base mt-2 leading-loose">
                  {t("conditions.invitation_text")}
                </p>
              </div>
              <div className="lg:col-span-6 md:col-span-6 col-span-12">
                <img
                  src="/images/Reason_Participation.png"
                  className="mx-auto md:h-full h-72 "
                  alt="minister_image"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 my-auto">
            <p className="text-text font-bold mb-1 text-center text-4xl leading-normal">
              {t("conditions.submission_deadline")}
            </p>
            <p className="text-sm text-text font-bold leading-loose text-center md:px-32">
              {t("conditions.acceptance_criteria")}
            </p>
            <div className="flex flex-wrap justify-around items-center my-6 gap-4">
              <div>
                <p className="text-xl font-bold bg-main text-white text-center py-12 px-3 rounded-2xl w-[370px] h-[170px] max-h-[200px] flex items-center justify-center leading-10">
                  {t("conditions.card_1")}
                </p>
                <p className="text-text text-center text-2xl font-bold mt-2">
                  {t("conditions.card_1_date")}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold bg-main text-white text-center py-12 px-3 rounded-2xl w-[370px] h-[170px] max-h-[200px] flex items-center justify-center leading-10">
                  {t("conditions.card_2")}
                </p>
                <p className="text-text text-center text-2xl font-bold mt-2">
                  {t("conditions.card_2_date")}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold bg-main text-white text-center py-12 px-3 rounded-2xl w-[370px] h-[170px] max-h-[200px] flex items-center justify-center leading-10">
                  {t("conditions.card_3")}
                </p>
                <p className="text-text text-center text-2xl font-bold mt-2">
                  {t("conditions.card_3_date")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
