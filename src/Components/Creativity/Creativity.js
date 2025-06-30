import React from "react";
import "./Creativity.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Creativity = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`creativity md:py-8 container mx-auto ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto md:text-justify text-center">
          <p className="md:text-4xl text-2xl font-bold">
            {t("videoSection.participantsTitle")}
          </p>
          <p className=" md:text-[18px] text-base mt-2 leading-loose">
            {t("videoSection.participantsDescription")}
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 md:mb-0 mb-8">
          <img
            src="/images/main_page_3.jpg"
            className="mx-auto md:h-full h-72  my-4"
            alt="creativity_image"
          />
        </div>
      </div>
    </section>
  );
};

export default Creativity;
