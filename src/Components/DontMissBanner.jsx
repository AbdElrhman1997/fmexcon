import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

const DontMissBanner = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <section
      className="dont_miss_banner md:-mt-0 -mt-16 flex lg:flex-row flex-col gap-10 justify-around items-center text-center  mb-12 relative overflow-hidden lg:min-h-[70vh] lg:before:bg-[#02304787] pt-8"
      dir="ltr"
    >
      <RegisterModal
        toggleModal={toggleModal}
        isOpen={isOpen}
        isVisitor={register && true}
        isExhibitor={!register && true}
      />
      <video
        className="absolute -z-10 w-full"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        src="https://admin.fmexcon.com/public/images/v2.mp4"
      ></video>
      <div className="py-8 container  mx-auto">
        <p className="text-white md:text-4xl text-2xl font-bold lg:leading-10 mb-2">
          {t("common.dont_miss")}
        </p>
        <p className="text-white md:text-2xl text-xl font-semibold lg:leading-10 mb-6">
          {t("common.enhance_presence")}
        </p>
        <div className=" flex sm:flex-row justify-center items-center bottom-8 left-0 right-0 mx-auto w-full px-4 max-w-2xl xl:gap-x-20 lg:gap-x-20 md:gap-x-20 gap-x-4">
          <button
            className="btn-view-home h-fit w-fit md:px-8 px-4 py-2 font-bold hover:bg-text hover:text-white cursor-pointer md:min-w-[250px] min-w-[45%]"
            aria-label={t("home.show_with_us")}
            onClick={() => {
              toggleModal();
              setRegister(false);
            }}
          >
            {t("home.show_with_us")}
          </button>
          <button
            className="btn-view-home h-fit w-fit md:px-8 px-4 py-2 font-bold hover:bg-text hover:text-white cursor-pointer md:min-w-[250px] min-w-[45%]"
            aria-label={t("home.show_with_us")}
            onClick={() => {
              toggleModal();
              setRegister(true);
            }}
          >
            {t("home.register_with_us")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DontMissBanner;
