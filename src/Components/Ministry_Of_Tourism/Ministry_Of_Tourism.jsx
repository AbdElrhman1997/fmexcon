import React from "react";
import { useTranslation } from "react-i18next";

const Ministry_Of_Tourism = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="visit-saudi-company relative"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:px-16 md:px-16 px-5 text-right z-20">
        <div className="2xl:flex xl:flex lg:flex md:flex items-center justify-between 2xl:px-16 xl:px-16 lg:px-16 md:px-8 px-4">
          <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:px-16 md:px-16 px-5 my-auto text-white">
            <p className="text-3xl" style={{ fontWeight: "bold" }}>
              {t("tourism.ministry.title")}
            </p>
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:block md:block flex justify-center lg:mt-0 md:mt-0 mt-4">
            <button className="visit-saudi-company-button bg-white hover:bg-transparent hover:text-white text-3xl">
              <a
                href="https://2024.fmexcon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("tourism.ministry.visitSite")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministry_Of_Tourism;
