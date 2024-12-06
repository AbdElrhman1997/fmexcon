import React from "react";
import "./WhatIsEvent.css";
import { useTranslation } from "react-i18next";

const WhatIsEvent = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`what-is-event lg:px-16 md:px-16 px-6 my-10 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12">
        <div className="lg:col-span-3 md:col-span-3 col-span-12 mb-6">
          {/* <p
            style={{
              color: "rgb(68, 173, 210)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {t("whatIsEvent.whatIs")}
          </p> */}
          <p
            style={{
              color: "rgb(16, 55, 131)",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {t("whatIsEvent.eventTitle")}
          </p>
        </div>
        <div className="lg:col-span-9 md:col-span-9 col-span-12">
          <p className="text-sm leading-loose text-justify">
            {t("whatIsEvent.eventDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEvent;
