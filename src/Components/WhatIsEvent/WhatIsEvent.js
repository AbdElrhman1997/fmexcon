import React from "react";
import "./WhatIsEvent.css";
import { useTranslation } from "react-i18next";

const WhatIsEvent = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`what-is-event my-10 md:mt-32 mt-14 container mx-auto ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div
        className="md:col-span-5 col-span-12 flex  justify-center m-5 gap-x-16 items-center"
        dir="ltr"
      >
        <img
          src="/images/sfma.png"
          alt="logo_image"
          className="md:h-24 h-12 mb-10"
        />
        <img
          src="/images/ساري اسود-01.svg"
          alt="logo_image"
          className="md:h-24 h-12 mb-10"
        />
      </div>
      <div className="lg:grid md:grid grid-cols-12">
        <div className="md:col-span-7 col-span-12 mb-6">
          <p className="md:text-3xl text-xl font-bold mb-3 md:text-justify text-center">
            {t("whatIsEvent.eventTitle")}
          </p>
          <p className="text-sm leading-loose text-justify">
            {t("whatIsEvent.eventDescription")}
          </p>
        </div>
        <div className="md:col-span-5 col-span-12 flex justify-end mx-10 items-center">
          <img
            src="/images/Logo-Header.png"
            alt="logo_image"
            className="md:h-40 h-20  mb-10 md:mx-0 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsEvent;
