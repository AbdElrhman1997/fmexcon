import React, { useEffect, useState } from "react";
import aboutImage from "../Images/aboutImage.png";
// import day1 from "../Images/اليوم-الاول.png";
// import day2 from "../Images/اليوم-الثاني.png";
// import day3 from "../Images/اليوم-الثالث.png";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import SponseresForm from "../Components/SponseresForm";
import axios from "axios";
import { Helmet } from "react-helmet";

const Conferance = () => {
  const { i18n, t } = useTranslation();
  const [activeDay, setActiveDay] = useState(1); // State to track active day
  const [speakers, setSpeakers] = useState([]); // State to track active day

  // const handleDayClick = (day) => {
  //   setActiveDay(day); // Set active day based on clicked button
  // };

  const getSpeakers = async () => {
    await axios
      .get("https://admin.fmexcon.com/api/getAttends")
      .then((res) => {
        setSpeakers(res?.data?.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getSpeakers();
  }, []);

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("conference.title")}</title>
      </Helmet>
      <div className="lg:col-span-12 col-span-12 back-ground">
        <img
          src={aboutImage}
          className="about-img col-span-12"
          alt={t("aboutImage.alt")}
        />
        <div className="text text-center">
          <h3>{t("conference.title")}</h3>
          <a
            href="https://sfma.sa"
            target="_blank"
            className="mt-6 text-white block"
          >
            {t("about.poweredBy")}
          </a>
        </div>
      </div>

      <div className="col-span-12">
        <div className="lg:grid md:grid grid-cols-12 lg:px-16 md:px-16 px-4 mt-4 mb-10">
          <div className="col-span-12 my-auto">
            <div className="flex justify-center gap-6 mt-4">
              <button
                type="submit"
                className="py-2 px-12 2xl:w-[200px] xl:[200px] lg:w-[200px] md:w-[200px] w-full rounded-md text-white font-bold text-sm bg-[#44add2] hover:bg-[#319cc4]"
              >
                <a href="/ar/register#ConferanceLogin">
                  {t("conference.register")}
                </a>
              </button>
              <button
                type="submit"
                className="py-2 px-12 2xl:w-[200px] xl:[200px] lg:w-[200px] md:w-[200px] w-full rounded-md text-white font-bold text-sm bg-[#44add2] hover:bg-[#319cc4]"
              >
                <a href="#login-with-us">{t("conference.speaker_register")}</a>
              </button>
            </div>
            {/* <div className="flex justify-center gap-6 mt-4 mb-12">
              <button
                type="submit"
                className="py-2 px-12 lg:w-fit md:w-fit w-full rounded-md text-white font-bold text-sm bg-[#44add2] hover:bg-[#319cc4]"
              >
                <a href="#conferance_map">{t("conference.program")}</a>
              </button>
            </div> */}
            <p className="text-[#103783] font-bold text-3xl text-center mt-12">
              {t("conference.overview_title")}
            </p>
            <p className="text-lg px-4 mt-4 text-[#3598db] text-center font-bold">
              {t("conference.event_name")}
            </p>
            <p className="text-lg px-4 text-[#3598db] text-center font-bold">
              {t("conference.theme")}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:grid md:grid grid-cols-12 lg:px-16 md:px-16 px-4 mb-10 col-span-12">
        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1">
            {t("conference.description_title")}:
          </p>
          <p className="text-sm text-[#023047] text-justify">
            {t("conference.description_text")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
            {t("conference.info_title")}:
          </p>
          <p className="text-sm text-[#023047] text-justify">
            {t("conditions.conference_dates")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            - {t("conference.time")}: {t("conference.start_time")} -{" "}
            {t("conference.end_time")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            - {t("conference.location")}: {t("conference.venue")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
            {t("conference.participation_reason_title")}:
          </p>
          <p className="text-sm text-[#023047] text-justify">
            {t("conference.participation_reason_text")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
            {t("conference.topics_title")}:
          </p>
          <p className="text-sm text-[#023047] text-justify">
            1. {t("conference.topic1")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            2. {t("conference.topic2")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            3. {t("conference.topic3")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            4. {t("conference.topic4")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            5. {t("conference.topic5")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            6. {t("conference.topic6")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            7. {t("conference.topic7")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
            {t("conference.commitment_title")}:
          </p>
          <p className="text-sm text-[#023047] text-justify">
            1. {t("conference.commitment_text_1")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            2. {t("conference.commitment_text_2")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            3. {t("conference.commitment_text_3")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            4. {t("conference.commitment_text_4")}
          </p>
          <p className="text-sm text-[#023047] text-justify">
            5. {t("conference.commitment_text_5")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
            {t("conference.vision_title")}:
          </p>
          <p className="text-sm text-[#023047]">
            {t("conference.vision_text")}
          </p>
        </div>

        <div className="col-span-12 my-auto">
          <p className="text-sm text-[#023047]">
            <p className="text-[#023047] font-bold text-sm mb-1 mt-6">
              {t("conference.mission_title")}:
            </p>
            <p className="text-sm text-[#023047] text-justify">
              {t("conference.mission_text_1")}
            </p>
          </p>
        </div>
      </div>
      {/* 
      <div id="conferance_map" className="col-span-12 mt-8 xl:px-16 lg:px-16 md:px-16 px-4 shadow-lg">
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleDayClick(1)}
            className={`py-2 px-4 border rounded-tr-md rounded-tl-md w-1/3 ${
              activeDay === 1
                ? "bg-[#44add2] text-white"
                : "bg-[#e5e7eb] text-[#374151]"
            }`}
          >
            {t("conference.day1")}
          </button>
          <button
            onClick={() => handleDayClick(2)}
            className={`py-2 px-4 border rounded-tr-md rounded-tl-md w-1/3 ${
              activeDay === 2
                ? "bg-[#44add2] text-white"
                : "bg-[#e5e7eb] text-[#374151]"
            }`}
          >
            {t("conference.day2")}
          </button>
          <button
            onClick={() => handleDayClick(3)}
            className={`py-2 px-4 border rounded-tr-md rounded-tl-md w-1/3 ${
              activeDay === 3
                ? "bg-[#44add2] text-white"
                : "bg-[#e5e7eb] text-[#374151]"
            }`}
          >
            {t("conference.day3")}
          </button>
        </div>

        <div className="mt-4">
          {activeDay === 1 && (
            <img
              src={day1}
              alt={t("conference.day1_image.alt")}
              className="w-full rounded-lg"
            />
          )}
          {activeDay === 2 && (
            <img
              src={day2}
              alt={t("conference.day2_image.alt")}
              className="w-full rounded-lg"
            />
          )}
          {activeDay === 3 && (
            <img
              src={day3}
              alt={t("conference.day3_image.alt")}
              className="w-full rounded-lg"
            />
          )}
        </div>
      </div> */}
      <div class="col-span-12 my-auto lg:px-16 md:px-16 px-4 ">
        <p
          className="text-sm text-[#44add2] text-center font-bold mt-4 lg:px-24 md:px-24 sm:px-12"
          id="login-with-us"
        >
          {t("conference.join_us")}
        </p>
      </div>
      <div className="col-span-12">
        <SponseresForm />
      </div>
      {/* <div className="col-span-12">
        {" "}
        <p class="text-3xl px-4 text-[#44add2] text-center font-bold -mt-4 mb-4">
          تعرف على المتحدثين
        </p>
      </div>
      <div
        className="col-span-12 "
        style={{
          background: "linear-gradient(91deg,#003054 14.71%,#005ea1 90.5%)",
        }}
      >
        <Speakers_Carousel sponsers={speakers} />
      </div> */}
      {/* <div className="col-span-12">
        <GetNewUpdates />
      </div> */}
    </section>
  );
};

export default Conferance;
