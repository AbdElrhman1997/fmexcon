import React from "react";
import aboutImage from "../Images/aboutImage.png";
import { useTranslation } from "react-i18next";
import dateLimit from "../Images/conditions.png";

const Conditions = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:col-span-12 col-span-12 back-ground text-center">
        <img
          src={aboutImage}
          className="about-img col-span-12"
          alt="aboutImage"
        />
        <div className="text">
          <h3
            className="xl:translate-y-0 lg:translate-y-0 md:translate-y-0 -translate-y-14"
            style={{ lineHeight: 1.2 }}
          >
            {i18n.t("conditions.title")}
          </h3>
          <p className="xl:mt-6 lg:mt-6 md:mt-6 -mt-10 text-white">
            {i18n.t("conditions.powered_by")}
          </p>
        </div>
      </div>

      <div className="col-span-12 px-3">
        <div className="lg:grid md:grid grid-cols-12 2xl:px-16 xl:px-16 lg:px-16 md:px-8 px-4 mb-10">
          <div className="col-span-12 my-auto font-semibold">
            <p className="text-[#212529] font-bold text-3xl mb-8 mt-8">
              {i18n.t("conditions.call_for_presentations")}
            </p>
          </div>
          <div className="col-span-12 my-auto font-semibold">
            <p className="text-[#3598db] font-bold text-sm mb-1">
              {i18n.t("conditions.conference_overview")}
            </p>
            <p className="text-sm text-[#023047] my-2 leading-loose text-justify">
              {i18n.t("conditions.conference_description")}
            </p>
          </div>
          <div className="col-span-12 my-auto font-semibold">
            <p className="text-[#3598db] font-bold text-sm mb-1 mt-6">
              {i18n.t("conditions.conference_info")}
            </p>
            <p className="text-sm text-[#023047] my-2">
              {i18n.t("conditions.conference_dates")}
            </p>
            <p className="text-sm text-[#023047] my-2">
              {i18n.t("conditions.conference_dates2")}
            </p>
            <p className="text-sm text-[#023047]">
              {i18n.t("conditions.conference_location")}
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
          <div className="col-span-12 my-auto font-semibold">
            <p className="text-[#3598db] font-bold text-sm mb-1 mt-6 my-2">
              {t("conditions.invitation")}
            </p>
            <p className="text-sm text-[#023047] leading-loose">
              {t("conditions.invitation_text")}
            </p>
          </div>
          <div className="col-span-12 my-auto">
            <p className="text-[#e03e2d] font-bold lg:text-xl md:text-xl mb-1 mt-6 text-center my-2">
              {i18n.t("conditions.submission_deadline")}
            </p>
            <p className="text-sm text-[#023047] font-bold leading-loose text-center">
              {i18n.t("conditions.acceptance_criteria")}
            </p>
            <img src={dateLimit} className="object-cover w-full mt-10 mb-6" />
          </div>
          {/* <div className="col-span-12 my-auto font-semibold">
            <p className="text-[#3598db] font-bold text-sm mb-1 mt-12">
              {i18n.t("conditions.requirements")}
            </p>
            <div className="flex lg:justify-start md:justify-start sm:justify-start justify-center gap-6 mt-4">
              <button
                type="submit"
                className="py-2 px-6 lg:w-fit md:w-fit w-full rounded-md text-white font-bold text-sm"
                style={{ backgroundColor: "rgb(68, 173, 210)" }}
              >
                <a
                  href="../Images/files/Arabic Call for presentation - International Facility Management Conference and Exhibition 2024.pdf"
                  download=""
                >
                  {i18n.t("conditions.download_first_file")}
                </a>
              </button>
              <a
                href="../Images/files/PDF 2 Ar.pdf"
                download
                className="py-2 px-6 lg:w-fit md:w-fit w-full rounded-md text-white font-bold text-sm"
                style={{ backgroundColor: "rgb(68, 173, 210)" }}
              >
                {i18n.t("conditions.download_second_file")}
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
