import React from "react";
import "./DigitalTransformation.css";
import { useTranslation } from "react-i18next";
import transformationImage from "../../Images/digital-transform.png";

const DigitalTransformation = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`digital-transformation mb-24 mt-14 lg:px-16 md:px-16 px-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6 ">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <img
            src={transformationImage}
            className="mx-auto w-full my-4"
            alt="minister_image"
          />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 px-6 my-auto">
          <p
            style={{ color: "rgb(68, 173, 210)", fontWeight: "bold" }}
            className="xl:text-2xl lg:text-2xl md:text-2xl text-xl"
          >
            {t("digitalTransformation.title")}
          </p>
          <p className="my-2">-----------</p>
          <p className="text-justify xl:text-lg lg:text-lg md:text-lg text-base">
            {t("digitalTransformation.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
