import React from "react";
import "./SponserMinister.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import ministerImage from "/images/minister.png";

const SponserMinister = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="sponser-minister"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6 ">
        {/* <div className="minister-watermark lg:col-span-6 md:col-span-6 col-span-12 lg:p-16 md:p-12 p-6 relative">
          <img
            src={ministerImage}
            className=" mx-auto w-full"
            alt="minister_image"
          />
        </div> */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:p-16 md:p-12 px-6 lg:my-4 my-2 w-full h-full flex flex-col justify-center items-center lg:-mr-8">
          <p
            style={{
              color: "rgb(68, 173, 210)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {t("sponserMinister.underPatronage")}
          </p>
          <p
            style={{
              color: "rgb(16, 55, 131)",
              margin: "4px 0px 12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {t("sponserMinister.ministerTitle")}
          </p>
          <p
            className="lg:text-3xl md:text-2xl text-2xl"
            style={{ color: "rgb(53, 152, 219)", fontWeight: "bold" }}
          >
            {t("sponserMinister.ministerName")}
          </p>
          <p style={{ margin: "12px 0px", fontSize: "20px" }}>
            {t("sponserMinister.eventDate")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponserMinister;
