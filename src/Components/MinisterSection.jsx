import React from "react";
import { useTranslation } from "react-i18next";

const MinisterSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className=" md:flex justify-center items-center gap-x-32 md:text-justify mb-16">
      <div className="md:w-fit w-80  mx-auto md:my-0 my-10  md:m-0">
        <div className="relative md:h-80 md:w-80 h-80">
          <img
            src="/images/Rectangle 36.png"
            alt=""
            className="absolute top-0 left-0 md:h-full h-80"
          />
          <img
            src="/images/صورة-الوزير 1.png"
            alt=""
            className="absolute top-0 left-0 md:h-80  h-80"
          />
        </div>
        <div className="text-center">
          <div className="bg-main text-white font-bold flex justify-center items-center lg:text-[27px] text-2xl leading-loose lg:py-[2px] py-[6px]">
            {t("common.event_patron")}
          </div>
          <div className="text-text font-semibold text-[18px] mt-2">
            {t("common.monister_position")}
          </div>
          <div className="text-text font-bold text-2xl">
            {t("common.monister_name")}
          </div>{" "}
        </div>
      </div>
      <img
        src="/images/Ministry-Logo.png"
        alt="Ministry of Municipalities and Housing "
        className="md:h-48 h-40 md:mx-0 mx-auto my-10"
      />
    </section>
  );
};

export default MinisterSection;
