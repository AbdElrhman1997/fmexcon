import React from "react";
import { useTranslation } from "react-i18next";

const Ministry_Of_Tourism_2 = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="visit-saudi-company-2 relative md:h-[50vh] h-[28vh] md:mt-10 mt-4"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="text-right" style={{ zIndex: 2 }}>
        <div className="flex flex-col justify-center items-center">
          <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto text-white ">
            <p className="md:text-[38px] text-2xl font-bold md:text-justify text-center leading-normal mx-3">
              {t("tourism.ministry.second_title")}
            </p>
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:block md:block flex justify-center md:mt-8 mt-4">
            <button
              className="btn-view-home lg:px-12 md:px-12 px-4 py-[9px] md:text-xl text-sm font-bold hover:bg-text hover:text-white cursor-pointer"
              aria-label={t("home.show_with_us")}
              disabled={true}
              style={{ padding: "8px 40px" }}
            >
              <a
                href="https://www.visitsaudi.com/en/riyadh?utm_source=eventseries102&utm_medium=Campaign102&utm_campaign=Facilities%20Management"
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

export default Ministry_Of_Tourism_2;
