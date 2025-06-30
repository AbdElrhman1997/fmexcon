import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

const RegisterBanner = () => {
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
    <section
      className="  bg-slate-900 "
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="register_banner container mx-auto flex lg:flex-row flex-col justify-between items-center py-12">
        <RegisterModal
          toggleModal={toggleModal}
          isOpen={isOpen}
          isVisitor={true}
        />
        <div
          className={`md:w-1/2 ${
            i18n.language === "en"
              ? "md:text-left text-center"
              : "md:text-right text-center"
          }`}
        >
          <p className="text-white text-4xl font-bold leading-snug mb-6 md:w-2/3">
            {t("common.event_hold_title")}
          </p>
          <button
            className="btn-view-home h-fit w-fit py-[9px] text-xl font-bold hover:bg-text hover:text-white cursor-pointer md:mb-0 mb-8"
            style={{ padding: "12px 36px" }}
            aria-label={t("home.show_with_us")}
            onClick={() => {
              toggleModal();
            }}
          >
            {t("home.register_with_us")}
          </button>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 text-3xl text-white font-bold text-center">
          <div className="bg-[#ffffff4d] rounded-xl p-7 h-fit min-w-[230px]">
            <div className="text-[40px]">+120</div>
            <div className="text-lg">{t("common.workshops")}</div>
          </div>
          <div className="bg-[#ffffff4d] rounded-xl p-7 h-fit min-w-[230px]">
            <div className="text-[40px]">+200</div>
            <div className="text-lg">{t("common.speakers")}</div>
          </div>
          <div className="bg-[#ffffff4d] rounded-xl p-7 h-fit min-w-[230px]">
            <div className="text-[40px]">+210</div>
            <div className="text-lg">{t("common.participating_entities")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterBanner;
