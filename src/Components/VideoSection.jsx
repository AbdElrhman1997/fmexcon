import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

const VideoSection = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <div className="col-span-12">
      <section
        className={` bg-[#EEEEEE] ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="my-8 md:-mt-0 -mt-10 md:py-16 py-8 container mx-auto">
          <RegisterModal
            toggleModal={toggleModal}
            isOpen={isOpen}
            isExhibitor={true}
          />
          <div className={`lg:grid md:grid grid-cols-12`}>
            <div className="md:col-span-6 col-span-12 my-auto mb-12 md:text-justify md:pl-7">
              <p className="md:text-4xl text-2xl font-bold text-text md:text-justify ">
                {t("whyThisEvent.whySponsor")}
              </p>
              <p className="mt-1 md:text-lg text-base  lg:leading-relaxed md:leading-relaxed leading-10">
                {t("whyThisEvent.description1")}
              </p>
              <p className="mt-1 md:text-lg text-base lg:leading-relaxed md:leading-relaxed leading-10">
                {t("whyThisEvent.description2")}
              </p>
              <p className="mt-1 md:text-lg text-base lg:leading-relaxed md:leading-relaxed leading-10">
                {t("whyThisEvent.description3")}
              </p>
              <p className="mt-1  mb-8 md:text-lg text-base lg:leading-relaxed md:leading-relaxed leading-10">
                {t("whyThisEvent.description4")}
              </p>
              <div className="flex justify-start lg:-translate-x-0 md:-translate-x-0 ">
                <button
                  className="btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                  style={{ padding: "12px 36px" }}
                  aria-label={t("home.show_with_us")}
                  onClick={() => {
                    toggleModal();
                  }}
                >
                  {t("whyThisEvent.exhibitWithUs")}
                </button>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 mx-2">
              <iframe
                src={`https://www.youtube.com/embed/_F-9LSla5uY`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full rounded-lg shadow-lg"
                style={{ display: "block", aspectRatio: "16/9" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
