import React from "react";
import "./DigitalTransformation.css";
import { useTranslation } from "react-i18next";

const DigitalTransformation = ({ from_conferance }) => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`digital-transformation md:mb-24 md:mt-14 container mx-auto ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6 ">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 md:text-justify text-center md:my-auto my-8">
          <p className="md:text-4xl text-2xl font-bold">
            {t("conference.vision_title_head")}
          </p>
          <p className="md:text-2xl text-xl font-semibold mt-1">
            {t("conference.vision_title")}
          </p>
          <p className=" md:text-[18px] text-base mt-2 leading-loose">
            {t("conference.vision_text")}
          </p>
        </div>

        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <img
            src="/images/main_page_1.jpg"
            className="mx-auto my-4 md:h-full h-72"
            alt="minister_image"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
