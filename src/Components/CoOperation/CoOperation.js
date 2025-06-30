import React from "react";
import { useTranslation } from "react-i18next";
import "./CoOperation.css";

const CoOperation = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`co-op my-8 md:py-16 py-8 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6 container mx-auto">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 md:block hidden">
          <img
            src="/images/main_page_2.jpg"
            className="mx-auto md:h-full h-72  my-4"
            alt="minister_image"
          />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto md:text-justify text-center">
          <p className="md:text-4xl text-2xl font-bold">
            {t("conference.mission_title_head")}
          </p>
          <p className="md:text-2xl text-xl font-semibold mt-1">
            {t("conference.mission_title")}
          </p>
          <p className=" md:text-[18px] text-base mt-2 leading-loose">
            {t("conference.mission_text_1")}
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 md:hidden block">
          <img
            src="/images/main_page_2.jpg"
            className="mx-auto md:h-full h-72  my-4"
            alt="minister_image"
          />
        </div>
      </div>
    </section>
  );
};

export default CoOperation;
