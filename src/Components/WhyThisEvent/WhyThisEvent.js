import React from "react";
import "./WhyThisEvent.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WhyThisEvent = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="" dir={i18n.language === "en" ? "ltr" : "rtl"}>
      {/* <p
        style={{
          fontWeight: "bold",
          color: "#44add2",
        }}
        className={`mb-10 mx-16 text-3xl ${
          i18n.language === "en"
            ? "lg:text-left md:text-left text-center"
            : "lg:text-right md:text-right text-center"
        }`}
      >
        {t("whyThisEvent.governmentEntities")}
      </p> */}
      <div
        className={`why-this-event lg:px-16 md:px-16 px-5 mb-24 ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}
      >
        <div className="2xl:flex xl:flex lg:flex md:flex items-center justify-between 2xl:px-16 xl:px-16 lg:px-16 md:px-8 px-4">
          <div className=" lg:col-span-6 md:col-span-6 col-span-12 my-auto text-white">
            <p
              style={{
                fontWeight: "bold",
              }}
              className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-2xl"
            >
              {t("whyThisEvent.whySponsor")}
            </p>
            <p className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-base my-3 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 mx-0">
              <span className="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 mx-0">-</span>{" "}
              {t("whyThisEvent.description1")}
            </p>
            <p className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-base my-3 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 mx-0">
              <span className="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 mx-0">-</span>{" "}
              {t("whyThisEvent.description2")}
            </p>
            <p className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-base my-3 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 mx-0">
              <span className="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 mx-0">-</span>{" "}
              {t("whyThisEvent.description3")}
            </p>
            <p className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-base my-3 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 mx-0">
              <span className="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 mx-0">-</span>{" "}
              {t("whyThisEvent.description4")}
            </p>
          </div>
          <div className=" lg:col-span-6 md:col-span-6 col-span-12 lg:block md:block flex justify-center">
            <button className="btn-why-this-event">
              <Link
                to={
                  i18n.language === "en"
                    ? `/en/sponsores#sponserForm`
                    : `/ar/sponsores#sponserForm`
                }
                className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-base"
              >
                {t("whyThisEvent.exhibitWithUs")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisEvent;
