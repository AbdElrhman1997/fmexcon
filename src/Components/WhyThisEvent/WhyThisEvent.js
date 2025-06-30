import React from "react";
import "./WhyThisEvent.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WhyThisEvent = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="" dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <div className="flex justify-center items-center">
        <div className="h-full bg-[#013047C7] relative">
          <div className="absolute top-0 left-0">
            <img src="/images" alt="card_1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisEvent;
